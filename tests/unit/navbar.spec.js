import Navbar from "@/components/navbar.vue";
import { shallowMount, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

let $router = {
    replace : jest.fn()
}
describe("navbar.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(Navbar,{
            mocks:{
                $router
            }
        })
    })
    
    it("renders",()=>{
        expect(wrapper.exists()).toBe(true)
    })
    // it("go to DoneTodos correct",async ()=>{
    //     wrapper.find("button.todos").trigger("click");
    //     await flushPromises()
    //     expect($router.replace).lastCalledWith({name:"Todos"})
    // })

})