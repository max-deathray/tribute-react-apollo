// async function feed(root, args, context) {
//   const where = args.filter
//     ? {
//         OR: [
//           { description_contains: args.filter },
//           { img_contains: args.filter },
//         ],
//       }
//     : {};

//   const vibes = await context.prisma.vibes({
//     where,
//     skip: args.skip,
//     first: args.first,
//     orderBy: args.orderBy,
//   });

//   return vibes;
// }

// module.exports = {
//   feed,
// };

async function feed(parent, args, context) {
  const count = await context.prisma
    .vibesConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { img_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count();
  const vibes = await context.prisma.vibes({
    where: {
      OR: [
        { description_contains: args.filter },
        { img_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
  return {
    count,
    vibes,
  };
}

module.exports = {
  feed,
};
