import Todo from "@/components/Todo.vue";
import {shallowMount} from "@vue/test-utils";
import flushPromises from "flush-promises";


describe("todo.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(Todo,{
            propsData:{
                description: 'test',
                completed: 'false'
            }

        })
    })

    it("renders",()=>{
        expect(wrapper.exists()).toBe(true)
    })
    it("data came",()=>{
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('test edit function',async ()=>{
        const startEditing=jest.fn();
        wrapper.setMethods({
            startEditing:startEditing
        })
        wrapper.find("button.edit").trigger("click");
        await flushPromises()
        expect(startEditing).toHaveBeenCalled()
    })

    // it('test form',async ()=>{
    //     const finishEditing=jest.fn();
    //     wrapper.setMethods({
    //         finishEditing:finishEditing
    //     })
    //     wrapper.find("input.desc").blur()
    //     await wrapper.vm.$nextTick()
    //     expect(finishEditing).toHaveBeenCalled()
    //     // expect(wrapper.find("[data-newTodoDescription]").text())
    //     // .toBe("Hello")
    // })
    

})