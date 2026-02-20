const Blog30Img = new Proxy({"src":"/_astro/Blog30.BrBFcwj-.jpg","width":3750,"height":1969,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/Blog30.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/Blog30.jpg");
							return target[name];
						}
					});

export { Blog30Img as B };
