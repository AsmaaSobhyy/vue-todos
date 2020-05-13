import TodoList from "@/components/TodoList.vue";
import {shallowMount} from "@vue/test-utils";


const $axios={
    get:()=>
    Promise.resolve({data:[{id:1,description:'hello',completed:false}]})
}

describe("todoList.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(TodoList,{
            //methods:{ getTodos:()=>{}}
            mocks:{
                $axios
            }
        })
    })

    it("renders",()=>{
        expect(wrapper.exists()).toBe(true)
    })
    // it("data came",async ()=>{
    //     await flushpromises()
    //     const todo=wrapper.vm
    //     expect(todo.id).to.equal(1)
    // })

    // it('test toggle function',()=>{
    //     wrapper.vm.$refs.childComponent.$emit('on-toggle',{id:1,description:'yes',completed:false})
    //     //wrapper.vm.$emit('on-toggle',{id:1,description:'yes',completed:false})
    //     const toggleTodo=jest.fn();
    //     wrapper.setMethods({
    //         toggleTodo:toggleTodo
    //     });
    //     expect(toggleTodo).toHaveBeenCalled()
    // })

})