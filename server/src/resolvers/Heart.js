function vibe(parent, args, context) {
  return context.prisma.heart({ id: parent.id }).vibe();
}

function user(parent, args, context) {
  return context.prisma.heart({ id: parent.id }).user();
}

module.exports = {
  vibe,
  user,
};
