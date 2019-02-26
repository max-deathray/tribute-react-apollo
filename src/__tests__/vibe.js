import Vibe from '../components/Vibe';
import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';

configure({ adapter: new Adapter() });

const fakeVibe = {
  id: 'cjr5nve4xhy2m0a71s0kir0ok',
  img:
    'https://i.pinimg.com/564x/6a/9c/69/6a9c69b7e19c56fdd8708a2d2fc95853.jpg',
  description: 'Cali Vibes',
  postedBy: {
    id: 'cjr5nug3kujzg0917auq55h64',
    name: 'McRae',
  },
  hearts: [
    {
      id: 'cjr6tyo5eltpg0a71tt5wp11m',
      user: {
        id: 'cjr5nug3kujzg0917auq55h64',
      },
    },
  ],
};

describe('<Vibe />', () => {
  it('renders & displays properly', () => {
    const wrapper = shallow(<Vibe vibe={fakeVibe} />);

    // call the debug method on wrapper in order to go into the react component!
    console.log(wrapper.debug());

    // test expected vals
  });
});
