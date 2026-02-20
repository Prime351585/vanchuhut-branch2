const Blog27Img = new Proxy({"src":"/_astro/blog27.CGiXA2e6.webp","width":1200,"height":630,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog27.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog27.webp");
							return target[name];
						}
					});

export { Blog27Img as B };
