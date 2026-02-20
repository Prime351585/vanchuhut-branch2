const Blog18Img = new Proxy({"src":"/_astro/blog18.DZjlWse1.png","width":1200,"height":628,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog18.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog18.png");
							return target[name];
						}
					});

export { Blog18Img as B };
