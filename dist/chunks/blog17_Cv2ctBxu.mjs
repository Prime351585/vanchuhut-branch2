const Blog17Img = new Proxy({"src":"/_astro/blog17.CguxL743.jpeg","width":1200,"height":628,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog17.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog17.jpeg");
							return target[name];
						}
					});

export { Blog17Img as B };
