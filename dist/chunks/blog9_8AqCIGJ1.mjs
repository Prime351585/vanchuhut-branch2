const Blog9Img = new Proxy({"src":"/_astro/blog9.rWZap56j.png","width":601,"height":601,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog9.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog9.png");
							return target[name];
						}
					});

export { Blog9Img as B };
