import Donetodo from "@/components/Donetodo.vue";
import {shallowMount} from "@vue/test-utils";



describe("Donetodo.vue",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(Donetodo,{
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
    

})