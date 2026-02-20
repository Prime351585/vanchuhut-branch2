const Blog29Img = new Proxy({"src":"/_astro/blog29.3IFULcek.webp","width":3750,"height":1969,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog29.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog29.webp");
							return target[name];
						}
					});

export { Blog29Img as B };
