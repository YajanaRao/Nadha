## 1. Use capitals for component names

If, like most folks, you’re using JSX (a JavaScript extension), the names of the components you create need to begin with uppercase letters. For instance, you’ll name components as SelectButton instead of selectbutton, or Menu instead of menu. We do this so that JSX can identify them differently from default HTML tags.

Earlier React versions maintained a list of all built-in names to differentiate them from custom names. But as the list needed constant updating, that was scrapped and capitals became the norm.

In case JSX is not your language of choice, you can use lowercase letters. However, this may reduce the reusability of components beyond your project.

## 2. Name the component after the function

It’s a good idea to name a component after the function that it executes so that it’s easily recognizable.

For example, ProductTable – it conveys instantly what the component does. On the other hand, if you name the component based on the need for the code, it can confuse you at a future point of time.

Another example, it’s preferable to name a component Avatar so that it can be used anywhere – for authors, users or in comments. Instead, if we name the component AuthorAvatar in the context of its usage, we’d be limiting the utility of that component.

Besides, naming a component after the function makes it more useful to the community as it’s more likely to be discovered.

## 3. Comment only where necessary

Attach comments to code only where necessary. This is not only in keeping with React best practices, it also serves two purposes at the same time:

- It’ll keep code visually clutter free.
- You’ll avoid a potential conflict between comment and code, if you happen to alter the code at some later point in time.
