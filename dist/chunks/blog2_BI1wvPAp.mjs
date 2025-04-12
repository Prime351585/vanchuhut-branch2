const Blog2Img = new Proxy({"src":"/_astro/blog2.ZNKqfmSf.webp","width":1024,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog2.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog2.webp");
							return target[name];
						}
					});

export { Blog2Img as B };
