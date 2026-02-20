const Blog16Img = new Proxy({"src":"/_astro/blog16.B_HVPwEa.png","width":1200,"height":628,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog16.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog16.png");
							return target[name];
						}
					});

export { Blog16Img as B };
