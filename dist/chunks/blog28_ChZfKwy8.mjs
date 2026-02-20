const Blog28Img = new Proxy({"src":"/_astro/blog28.Bo6iruvx.webp","width":3750,"height":1969,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog28.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog28.webp");
							return target[name];
						}
					});

export { Blog28Img as B };
