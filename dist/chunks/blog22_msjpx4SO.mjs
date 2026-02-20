const Blog22Img = new Proxy({"src":"/_astro/blog22.DKWXth9C.webp","width":3750,"height":1969,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog22.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog22.webp");
							return target[name];
						}
					});

export { Blog22Img as B };
