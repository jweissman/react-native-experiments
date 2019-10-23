import React from 'react';
import ListTemplate from './ListTemplate';
import { mount, ReactWrapper } from 'enzyme';
import { Title, List, ListItem, Header, Body, Content } from 'native-base';
type Animal = { id: number, species: string, description: string }
let animals: Animal[] = [{ id: -1, species: 'felis catus', description: 'Meow' }]
class Zoo extends ListTemplate<Animal> {}

const renderComponent = (title: string, items: Animal[]) => {
  let wrapped: ReactWrapper = mount(
      <Zoo
        title={title}
        items={items}
        renderItem={({ item: animal }) => <ListItem>{animal.description}</ListItem>}
        onNavigateBack={()=>{}}
      />
  );
  return wrapped;
}

describe("ListTemplate", () => {
    let wrapper: ReactWrapper;
    beforeEach(() => {
        wrapper = renderComponent("My Animals", animals);
    })
    describe("structure", () => {
        describe("header", () => {
            let header: ReactWrapper;
            beforeEach(() => header = wrapper.find(Header))
            it("has a title", () => {
                expect(header.containsMatchingElement(
                    <Title>My Animals</Title>
                )).toEqual(true);
            })
        });

        describe("content", () => {
            let body: ReactWrapper;
            beforeEach(() => body = wrapper.find(Content).first())
            it("has a list of items", () => {
                expect(body.exists()).toEqual(true);
                expect(body.exists(List)).toEqual(true);
                let list = body.find(List).first();
                expect(list.props().dataArray).toEqual(animals);
                expect(list.find(ListItem).exists()).toEqual(true);
                expect(list.find(ListItem).first().text()).toEqual("Meow");
            })
        });
    })
    describe("function", () => { test.todo("links over to item detail view") })
})