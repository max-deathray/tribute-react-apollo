function vibes(parent, args, context) {
  return context.prisma.user({ id: parent.id }).vibes();
}

module.exports = {
  vibes,
};
