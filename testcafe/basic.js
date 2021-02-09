import { Selector } from "testcafe";

fixture`Editor`.page`http://localhost:3000`;

test.only("create new child", async (t) => {
  const editor = Selector("#content");

  const firstNote = editor.child(0);
  await t.typeText(firstNote, "hi there");
  await t.pressKey("meta+i");
  const firstChild = firstNote.child(0);
  const secondChild = firstNote.child(0);

  await t.expect(firstChild.innerText).eql("0: hi there");
  await t.expect(secondChild.innerText).eql("1: ");
});
