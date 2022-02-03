__NUXT_JSONP__("/thoughts/what-ive-learnt-over-the-past-year", {data:[{page:{title:"What I've learnt over the past year",content:"\u003Ch2\u003E2020 &mdash; 2021\u003C\u002Fh2\u003E\u003Cp\u003EI didn&rsquo;t want to write a verbose blog post about the past year but the more I got to thinking, the more I felt it necessary to document (mostly for myself) the key lessons I&rsquo;ve learned from this past year. These lessons are not necessarily about Covid, they&rsquo;re about other factors that have impacted on my life too such as losing my father and from what my latest startup adventure has taught me.\u003C\u002Fp\u003E\u003Cp\u003EBelow are my observations, maybe you&rsquo;ll be able to learn something from these too.\u003C\u002Fp\u003E\u003Ch3\u003E1. That deeply understanding what you&rsquo;re designing for by learning to build your idea is incredibly valuable\u003C\u002Fh3\u003E\u003Cp\u003EThis might feel obvious with a cursory glance, but it&rsquo;s true. Lots of people say it, and lots of people have varying opinions on what &lsquo;learning to build your idea&rsquo; truly is. In my mind, it&rsquo;s whatever it takes to realise your vision enough to make sense of it as a true end product, even if that&rsquo;s incredibly MVP.\u003C\u002Fp\u003E\u003Cp\u003EI took this approach by building out Figma plugins to scratch an itch around weird interface quirks or missing features. I could have not bothered, or I could have asked someone else to build it, or even find the nearest alternative. But the reality is, I spent the time to learn to create them myself, in turn, I better understood how Figma works under the hood, and finally learned lots of valuable TypeScript along the way.\u003C\u002Fp\u003E\u003Cp\u003EIt taught me a lot about shipping products to customers, whether it&rsquo;s free or not, it matters. And it taught me a lot about taking on feedback and improving ideas, but without just doing \u003Cstrong\u003Eeverything\u003C\u002Fstrong\u003E someone asks for.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Learn to build things, no matter how small.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E2. The value of building and having a robust design system is not to be ignored\u003C\u002Fh3\u003E\u003Cp\u003EDesign systems are complicated, they&rsquo;re time consuming to build well and there&rsquo;s still an enormous gap between the designed design system (in Figma, Sketch or another tool of choice) versus the coded component library (the name difference alone is irritating!).\u003C\u002Fp\u003E\u003Cp\u003EHowever, taking the time to build out a robust system makes the world of difference in the long run. If you take the time to create flexible components, and think about their relationship to each other and their scalability, you&rsquo;ll start to reap the rewards pretty fast. If you can keep lesson 1 in mind too and actually try to create any of these in Vue, React, Swift or similar, then you&rsquo;ll also find limitations that allow you to rethink how you designed it in the first place. So you can go back and improve on its flexibility and scalability.\u003C\u002Fp\u003E\u003Cp\u003ERobust systems also ensure consistency of your brand application across interfaces and other media. I saw a lot of worry previously about design systems being so good that a developer can build content without a design. Great! That should be the goal. If they can build views without Design mocking them up, Design can focus on defining the intention of the work, it&rsquo;s reason for being, the customer value, the stakeholder needs etc. Designing the intention, not designing the mock.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Design systems create room for more intentional work.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E3. The importance of building strong design&mdash;dev relationships\u003C\u002Fh3\u003E\u003Cp\u003ELearning how components are built, giving it a go yourself, that&rsquo;s all useful in ensuring a positive handover experience with Development\u002FEngineering. But if they&rsquo;re not onboard with the design strategy and don&rsquo;t buy in to the use case of components then you&rsquo;re never going to build the best bond for the best end product.\u003C\u002Fp\u003E\u003Cp\u003EDesigners and Developers should be like Ham and Cheese, no matter what they go together. You should be in each other&rsquo;s pockets in a positive way, defining and scoping solutions from the outset, together. If you show willing by trying to prototype a component in real code or just showing that you&rsquo;ve considered limitations though good documentation, it&rsquo;ll go a long way. A great engineer will take the time to explain other limitations you may have missed and together you&rsquo;ll build something truly scalable and great.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Start building that relationship as early as you can. It makes the world of difference.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E4. That business needs and product needs are often at odds with each other but that&rsquo;s okay, it&rsquo;s all about compromise\u003C\u002Fh3\u003E\u003Cp\u003EBusinesses have needs that can often vary from what the product really requires, for example, when fundraising a business will be focused on optics and future product vision, whereas during a period after fundraising, they&rsquo;ll likely focus more on growth.\u003C\u002Fp\u003E\u003Cp\u003EIt&rsquo;s common for these business needs to clash with product needs. Often VCs will turn down businesses by not ever saying no, and instead, by offering product feedback so they keep an open door in case you suddenly do find the traction they desire. When they do this, it&rsquo;s easy for stakeholders outside of the Product team to prioritise these seemingly &ldquo;important&rdquo; features. The reality is, these features are merely an easy out for the investor and will often lead to feature bloat in your product.\u003C\u002Fp\u003E\u003Cp\u003EIt&rsquo;s a tough line to walk, trying to appease VCs or business stakeholders is important, but it can be super hard to do this without straying from your product roadmap.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Compromise is key, but don&rsquo;t let business requirements derail your product roadmap.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E5. That startups are hard, but a strong team and a true bond is enough to get you through it\u003C\u002Fh3\u003E\u003Cp\u003ENever underestimate the power of building strong relationships. Working at startups, or any company for that matter, is incredibly difficult. But in reality, it&rsquo;s just business and businesses have their ups and downs. What gets you through is having strong relationships. Focus on building them and harnessing them to air out your concerns and worries along the way.\u003C\u002Fp\u003E\u003Cp\u003EHaving great friends outside of work is awesome, but they don&rsquo;t know what the day to day feels like. Having great colleagues internally, makes all of the difference. They understand the nuances of the businesses and are often times going through what you are. Don&rsquo;t be afraid to be vulnerable but avoid falling into hearsay and negativity.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Great relationships at work will see you through the toughest times.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E6. That product managers are essential, if you give them the freedom to do their best work!\u003C\u002Fh3\u003E\u003Cp\u003EA good Product Manager (PM) is like a good red wine; let them breathe for a little while and they&rsquo;ll only get better. I&rsquo;ve seen situations where Product Managers are essentially just task managers, writing Jira tickets and little more. This isn&rsquo;t good product management or good use of a Product Manager. They should write Jira tickets for definite, but not just that.\u003C\u002Fp\u003E\u003Cp\u003EA good PM is given the freedom to do what they need to do at any time. To drive the team forwards and push for the best outcome for both the business and product team too. A good PM also works closely with design at the outset, working through user experience documentation and process; helping to define the pain points and intended happy paths, being part of the user research process, supporting the design documentation process and ensuring that there&rsquo;s a solid brief.\u003C\u002Fp\u003E\u003Cp\u003EIn some ways, in the outset of the design process, it should be hard to know which person is the designer and which is the PM, only when it comes to pursuing wireframes and detailed design processes should that split occur.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Product Managers are essential, but give them room to do their job!\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E7. That design, development and the intersection of the two are my lifeblood\u003C\u002Fh3\u003E\u003Cp\u003EThis is a personal one, but maybe one that is good to share. I&rsquo;ve learnt that caring about both design and development, understanding both of those processes and being confident in both are what excites me and keeps me motivated. Knowing that, writing it down and owning it, helps me to stay on course with my passions and guides my life choices accordingly.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Find your perfect fit. Lean into it. And never let it go.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E8. To never underestimate the power of taking chances\u003C\u002Fh3\u003E\u003Cp\u003ELike a Monopoly &lsquo;Chance&rsquo; card, taking a chance can be a risk that either has a reward or a negative consequence. Either way, every chance you take is a lesson learnt and in many ways is a chance to grow and evolve. Chances can either validate your decision making and improve your life or invalidate your decision making, change things and cause you to course correct. No matter which it is, you learn a lot by taking them.\u003C\u002Fp\u003E\u003Cp\u003ENot all chances are created equal though. Gambling is chance (unless you&rsquo;ve got some mad skills) and is more often than not, likely to end badly. Changing careers is a chance that can equally either pay off or lead to a need to flip again. But whatever happens, own the chances you take and look at them from a longer-term perspective. You might find that what once felt like the worst thing that could ever happen, actually ended up changing your life for the better.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Over the long term, chances are what teach you the most.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E9. To live every moment with intention\u003C\u002Fh3\u003E\u003Cp\u003EThose who are close to me will know that I recently lost my father to his battle with cancer. It&rsquo;s been a very tough couple of months but practicing elements of buddhist and stoic ideologies has helped me to work through it all. Equally, channelling my inner &ldquo;Dad&rdquo; has helped a lot too.\u003C\u002Fp\u003E\u003Cp\u003EMy Dad was a true stoic, minimalist and intentional human. He believed in living in the present moment always and through his diagnosis and 6 and a half years of dealing with it, he never once complained or let it hold him back. Instead he made the most of every single moment he had on this planet. He explored parts of the country he&rsquo;d never seen before, spent time with the people he loved most, focused on restoring a forest nearby to where he lived and gave back to the planet more than he ever had before.\u003C\u002Fp\u003E\u003Cp\u003EI&rsquo;m now focused on channelling him as much as I can to live my life with the most intention.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Live every moment with intention, but not like it&rsquo;s your last.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E\u003Ch3\u003E10. To be grateful for all that I have but not be complacent\u003C\u002Fh3\u003E\u003Cp\u003EWe&rsquo;ve been through a lot as a planet lately, but it&rsquo;s still very easy to live in a bubble of your own individual life and community (online or offline) without really appreciating what you have.\u003C\u002Fp\u003E\u003Cp\u003EI&rsquo;ll keep this one short and sweet. But now more than ever, I have nothing but gratitude for my life, my family, my friends, and my career.\u003C\u002Fp\u003E\u003Cblockquote\u003E\u003Cp\u003EPithy takeaway: Love what and who you have in your life.\u003C\u002Fp\u003E\u003C\u002Fblockquote\u003E",metadata:{published:"2021-06-05",snippet:"Lessons I’ve learnt over the past year.",tag:"opinion",latest:true,hero:{url:"https:\u002F\u002Fcdn.cosmicjs.com\u002Fff5c95a0-c5f1-11eb-93bc-d7c81bee3189-D7882D40-C6C3-4DBA-ACA2-1CDDCE7EAEE2.png",imgix_url:"https:\u002F\u002Fimgix.cosmicjs.com\u002Fff5c95a0-c5f1-11eb-93bc-d7c81bee3189-D7882D40-C6C3-4DBA-ACA2-1CDDCE7EAEE2.png"}},modified_at:"2021-12-21T09:03:43.875Z",order:"7",__typename:"Object"}}],fetch:[],mutations:[]});