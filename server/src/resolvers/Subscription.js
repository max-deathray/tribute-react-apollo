function newVibeSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vibe({ mutation_in: ['CREATED'] }).node();
}

const newVibe = {
  subscribe: newVibeSubscribe,
  resolve: payload => {
    return payload;
  },
};

function newHeartSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.heart({ mutation_in: ['CREATED'] }).node();
}

const newHeart = {
  subscribe: newHeartSubscribe,
  resolve: payload => {
    return payload;
  },
};

module.exports = {
  newVibe,
  newHeart,
};
