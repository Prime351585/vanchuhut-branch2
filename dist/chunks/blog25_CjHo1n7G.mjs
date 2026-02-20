const Blog25Img = new Proxy({"src":"/_astro/blog25.B286GzTx.webp","width":3780,"height":1890,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog25.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog25.webp");
							return target[name];
						}
					});

export { Blog25Img as B };
