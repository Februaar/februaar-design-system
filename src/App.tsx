import React from 'react';
import { Button } from '@februaar/design-system';

const App = () => {
  return (
    <>
      <Button
        size="lg"
        variant="primary"
        color="serenity"
        _hover={{ color: '#fff', backgroundColor: '#f7cac9' }}
      >
        버튼을 눌러보세요
      </Button>
    </>
  );
};

export default App;
