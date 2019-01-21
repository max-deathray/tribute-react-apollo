function postedBy(parent, args, context) {
  return context.prisma.vibe({ id: parent.id }).postedBy();
}

function hearts(parent, args, context) {
  return context.prisma.vibe({ id: parent.id }).hearts();
}

module.exports = {
  postedBy,
  hearts,
};
