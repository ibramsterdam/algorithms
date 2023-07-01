import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "../helper/ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
