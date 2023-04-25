import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
/*
 (1) Check lodging list in add accommodation
*/
export const accommodationRouter = createTRPCRouter({
  // Get all accommodation
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.accommodation.findMany({
        select: {
          name: true,
          location: true,
        },
        orderBy: {
          location: "asc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),

  // Get one accommodation
  getOne: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const id = input;
    return ctx.prisma.accommodation.findUnique({
      where: { id },
    });
  }),

  // Add a new accommodation
  // add: protectedProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       address: z.string(),
  //       facebook: z.string(),
  //       email: z.string(),
  //       contactNum: z.number(),
  //       category: z.string(),
  //       rates: z.number(),
  //       roomQuantity: z.number(),
  //     }),
  //   )
  //   .mutation(({ ctx, input }) => {
  //     const userId = ctx.session.user.id;
  //     // remove unit quantity as last parameter in input
  //     const { name, address, facebook, email, contactNum, category, rates } =
  //       input;
  //     return ctx.prisma.accommodation.create({
  //       //need to create id
  //       data: {
  //         name,
  //         address,
  //         facebook,
  //         email,
  //         contactNum,
  //         category,
  //         rates,
  //         //unitQuantity,
  //       },
  //     });
  //   }),

  // Archive an accommodation
  archive: protectedProcedure
    .input(z.object({ id: z.string(), isArchived: z.boolean() }))
    .mutation(({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const id = input.id;
      const archived = input.isArchived;
      return ctx.prisma.accommodation.update({
        where: { id },
        data: {
          is_archived: !archived,
        },
      });
    }),

  // Get All Archived accommodations
  // getArchives: protectedProcedure.input(z.string()).query(({ ctx }) => {
  //   const userId = ctx.session.user.id;
  //   return ctx.prisma.accommodation.findMany({
  //     where: { landlord: userId },
  //     include: {
  //       // : true,
        
  //     },
  //   });
  // }),

  // Delete an accommodation
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    const id = input;
    return ctx.prisma.accommodation.delete({
      where: { id },
    });
  }),



  // Search an accommodation
  getMany: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        address: z.string().optional(),
        location: z.string().optional(),
        landlord: z.string().optional(),
        tags: z.string().optional(),
        num_of_rooms: z.number().optional(),
        page: z.number(),
        multiplier: z.number(),
      }),
    )
    .query(({ ctx, input }) => {
      // const name = input;
      return ctx.prisma.accommodation.findMany({
        skip: input.page,
        take: input.multiplier,
        where: {
          OR: [
            {
              name: {
                contains: input.name,
              },
              address: {
                contains: input.address,
              },
              location: {
                contains: input.location,
              },
              landlord: {
                contains: input.landlord,
              },
              tags: input.tags,
              num_of_rooms: input.num_of_rooms,
            },
          ],
          
        },
      });
    }),

  // Edit an accommodation
  edit: protectedProcedure
    .input(
      z.object({
        item: z.object({
          id: z.string(),
          name: z.string().optional(),
          address: z.string().optional(),
          location: z.string().optional(),
          landlord: z.string().optional(),
          contact_number: z.number().optional(),
          tags: z.string().optional(),
          num_of_rooms: z.number().optional(),
          rooms: z.string().optional(),
          is_archived: z.boolean().optional(),
          fb_page: z.string().optional(),
        }),
        name: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { item } = input;
      const { id } = item;
      return ctx.prisma.accommodation.update({
        where: { id },
        data: {
          name: item.name,
          address: item.address,
          location: item.location,
          // contact_number: item.contact_number,
          tags: item.tags,
          num_of_rooms: item.num_of_rooms,
          rooms: item.rooms,
          is_archived: item.is_archived,
          fb_page: item.fb_page,
        },
      });
    }),
});
