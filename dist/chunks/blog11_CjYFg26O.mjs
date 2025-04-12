const Blog11Img = new Proxy({"src":"/_astro/blog11.u2kfN4kA.webp","width":6000,"height":4004,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/vanchuhut-branch2/src/assets/blogImages/blog11.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/vanchuhut-branch2/src/assets/blogImages/blog11.webp");
							return target[name];
						}
					});

export { Blog11Img as B };
