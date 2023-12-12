import React from 'react';
import { Button } from '../index';

export const primary = () => (
  <>
    <div>
      <Button size="small" onPress={() => alert('Button pressed!')}>
        Small
      </Button>
      <Button size="medium" onPress={() => alert('Button pressed!')}>
        Medium
      </Button>
      <Button size="large" onPress={() => alert('Button pressed!')}>
        Large
      </Button>
    </div>
    <div>
      <Button size="small" onPress={() => alert('Button pressed!')}>
        Small
      </Button>
      <Button size="medium" onPress={() => alert('Button pressed!')}>
        Medium
      </Button>
      <Button size="large" onPress={() => alert('Button pressed!')}>
        Large
      </Button>
    </div>
  </>
);

export const secondary = () => (
  <>
    <Button secondary size="small" onPress={() => alert('Button pressed!')}>
      Small
    </Button>
    <Button secondary size="medium" onPress={() => alert('Button pressed!')}>
      Medium
    </Button>
    <Button secondary size="large" onPress={() => alert('Button pressed!')}>
      Large
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button isDisabled size="small" onPress={() => alert('Button pressed!')}>
      Small
    </Button>
    <Button isDisabled size="medium" onPress={() => alert('Button pressed!')}>
      Medium
    </Button>
    <Button isDisabled size="large" onPress={() => alert('Button pressed!')}>
      Large
    </Button>
  </>
);
