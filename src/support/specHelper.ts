import { ReactWrapper } from "enzyme";

const findByTestID = (testID: string, wrapper: ReactWrapper) => {
  return wrapper.findWhere(
      node => node.prop('testID') === testID
  );
}

// const renderWithNav 

export { findByTestID };