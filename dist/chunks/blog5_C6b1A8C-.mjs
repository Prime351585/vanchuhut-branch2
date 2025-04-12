const Blog5Img = new Proxy({"src":"/_astro/blog5.B1ktbGwT.webp","width":1588,"height":1192,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog5.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog5.webp");
							return target[name];
						}
					});

export { Blog5Img as B };
