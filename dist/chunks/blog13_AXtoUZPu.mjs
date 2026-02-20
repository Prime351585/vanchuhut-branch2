const Blog13Img = new Proxy({"src":"/_astro/blog13.DDt4GIHJ.webp","width":630,"height":429,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog13.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog13.webp");
							return target[name];
						}
					});

export { Blog13Img as B };
