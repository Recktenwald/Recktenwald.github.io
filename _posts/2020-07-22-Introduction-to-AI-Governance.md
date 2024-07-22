---
layout: post
mathjax: true
title:  "A short introduction to AI Governance"
date:   22/07/2024 
categories: AI
show_abstract: true
abstract: My final project of the Bluedot AI Governance Course 2024.
---


[This is a short exposition / introduction to AI Governance. It was created as my final project of the Bluedot course on AI Governance. I am new to this field, by no means an expert and the epistemic status is ‘medium confidence’ as a result. If you are finding this blog post and want to go a bit deeper I recommend also watching [this talk](https://blog.heim.xyz/presentation-on-introduction-to-compute-governance/).]

  

I want to highlight three different ways to regulate advanced AI systems and their development. In each case I want to lay out why this policy lever would be expected to work in the first place, how it is / might be implemented and then draw some parallels to similar regulation in other industries.

# Chip Regulation

The semiconductor industry is pretty small and centralized. This [article](https://cset.georgetown.edu/publication/the-semiconductor-supply-chain/) by CSET gives a very detailed overview. The overly simplified picture looks like this:

1. First you must design the chip. That is done mostly by Intel, AMD, and Nvidia in the U.S.
2. Then you must manufacture the Chip. This is mostly done in TSMC in Taiwan.    
3. You need to supply the chip manufacturer. This is mostly done by AMSL in the Netherlands.
    
 

That means the U.S. and its allies have enormous regulatory power here. Of course other firms in other countries play important roles, but these are also more aligned with the U.S. so fall under the “its allies” qualifier.

At the same time it is currently impossible to train advanced AI systems without a lot of very high end chips. The totality of this is usually called “compute” and is one of the critical ingredients. Since physical chips are, well, physical objects they can be traced and regulated. And since they come out of only relatively few firms this is also feasible. The fact that these are very complicated high end components makes them perfect targets for regulation.

  

## How does this work

The Biden administration has already implemented export controls, with the goal of stifling China’s ability to develop their own AI systems. They focus on advance chips as well as equipment and components necessary for their fabrication - [the whole ecosystem](https://www.csis.org/analysis/choking-chinas-access-future-ai).

By restricting China’s ability to buy, design (the software is restricted) or produce the necessary chips (the raw material as well as the necessary equipment is restricted), they are, for the time being, locked out of one ingredient of modern AI.


How are these export bans enforced? The U.S. has an [Entity List](https://en.wikipedia.org/wiki/Entity_List) and in essence U.S. companies aren’t allowed to design or in any way support the production of chips. This is also not a new construct, the Entity List has been in use for many years now, so one would assume that the U.S. government has ways to check and enforce compliance here.  [citation needed] (Horse joke)


There are specific guidelines for how powerful chips can be, and still be allowed to China. You couldn’t flow enough data through a gaming GPU, so that’s ok to export (the important property that gaming GPUs lack is inter-chip communication bandwidth, so just getting 10x the number of GPUs doesn’t really help). This does however create an incentive for companies to develop chips that fall just barely under this. Obviously I couldn’t find any Nvidia executives outright stating this, but they did file an [8-K form with the SEC](https://www.sec.gov/ix?doc=/Archives/edgar/data/1045810/000104581022000146/nvda-20220826.htm). In this they explain to their shareholders that they were informed on August 26 that they won’t be able to sell the A100 or H100 in China, and that they expect to lose revenue because of this (obviously valid). The A800 was released in late November that year. Was that to have a maximally powerful product they could still sell in China? You be the judge of that. 


## Parallels to other industries

The export regulation here has historical precedent in dual use / weapons technology. [The International Traffic in Arms Regualtions](https://en.wikipedia.org/wiki/International_Traffic_in_Arms_Regulations) has been in place for decades to give the U.S. some control about the military technology and equipment available to other countries, notably Russia and China.
  

The experience with this suggests that the U.S. will be able to enforce, and keep up-to-date, export restrictions on advanced AI chips.

# Know-Your-Customer

Know-Your-Customer regulation means, in essence, that companies have to vet who they are doing business with.

In this context of AI Governance, the idea is to impose this on Cloud Service Providers (CSPs). Similar to the market of physical chips, the market on renting their usage is highly centralised and dominated by US companies (Amazon, Microsoft, and Google have around two thirds of the market share). From the government’s perspective this will make it easier to control and enforce this, than if the market were more fragmented.


Through mandatory monitoring by the CSPs it would also be possible to notice the development of new AI systems early. This is an improvement over the potential idea of the government monitoring the current leaders in the field, since CSPs would notice new companies doing huge training runs, as well as non-U.S. companies that couldn’t be directly monitored by the U.S. 

This would be trivial to track for CSPs since they already use total compute for billing purposes.

Such an early warning system could also be used to then inform further ad-hoc action. AI is already viewed as a national security risk, so we could expect the government to move fast and e.g. order CSPs to temporarily stop training runs.

Knowing that activities will be monitored might in itself already be enough to deter malicious actors. Together with the difficulty to acquire the physical infrastructure itself this might stop much development in its tracks.


## How would it work

Let’s talk about what this would look like in practice.

The first step is to establish a clear threshold of total compute that would trigger a KYC event. This threshold would have to be dynamic - advances in algorithms might increase how powerful a model can be trained at that threshold. 

The CSP would then be required to identify their client to some degree of detail. This would include so-called “beneficial owners”. The idea here is that it shouldn’t be trivially easy to create a dozen shell or subsidiary entities and then go up to the threshold multiple times in sequence to train one bigger model. By having to check (and accordingly the client having to reveal) any individual who in some sense owns or controls the client, this would be much harder.

Similarly there would have to be some requirement to share this type of information with either other CSPs or a centralised government authority that prevents evasion by using different providers. There are also [techniques](https://en.wikipedia.org/wiki/Private_set_intersection) for unrelated parties to compare sets of secrets (i.e. the set of their customers) with each other, such that each party only learns what the intersection is (i.e. which customers are shared), without revealing anything about the rest. This would be crucial to ensure sufficient data protection.


Which brings us to the most contentious point about KYC: CSP would require some information on what the client intends to do with the compute. For example, French AI experts have already raised concerns about trade secrets. Together with general data privacy concerns, existing E.U. regulation, etc. this is a thorny problem. At the moment [companies already advertise](https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/) with being able to protect the users confidential information. 

One suggestion is to use current meta-knowledge on what the type of cluster, together with the total compute, implies about what is being done. This again would have to be reassessed on a regular basis. 

For more details, I liked these two articles:

- [Egan and Heim 2023](https://arxiv.org/abs/2310.13625)
    
- [Allison and Triolo 2024](https://www.lawfaremedia.org/article/know-your-customer-is-coming-for-the-cloud-the-stakes-are-high)
    

## Parallels to other industries

KYC requirements are best known from the financial sector, where they have been in use internationally for decades. The concept of a “beneficial owner” comes directly from there as well. There are thresholds above which banks much report clients to a central authority, there are more complicated conditions for Suspicious Activity Reports etc. Overall the parallels are pretty strong to the policy proposals I’ve skimmed for CSPs. 

  
# Hardware-enabled monitoring

(This section is mostly a very short summary of [Shavit 2023](https://arxiv.org/abs/2303.11341))

Consider the setting where somebody was allowed to buy the necessary high-end chips and a client is allowed to use it for their stated purpose. How can regulators monitor what they are doing with the compute to make sure they aren’t e.g. training a high-risk system?

The organisation using the compute will make a claim like “The system we train is in line with regulation” and need to prove this to a Verifier. The Verifier might want to check the total compute, make sure the training data doesn’t contain e.g. code for security exploits (which might train the model to find new ones), check that the model performance doesn’t exceed some level.  

Depending on the results of this investigation it could trigger events like bans on continued development or deployment, mandatory fine-tuning to train the model to be safer (in some sense), etc.
 

To enable this, hardware could be designed to log certain data about what it is doing - for example snapshots of weights - directly on the hardware. The Verifier could then check a random sample of chips to verify the claim.


## How this would work

  
The prover claims to do a legal training run, using some dataset that doesn’t contain critical information, the size and design of the model isn’t too big / powerful, etc. All of this gets written down in a protocol of the training process. The Verifier wants to check if the chips did actually get used for this type of training run. Since the weights are the output of the training process, which is deterministic, if the random seed is known, it is enough to check snapshots of parts of the weights, and see if they are consistent with the claimed protocol. 

We are looking for a way that makes it infeasible for the Prover to create a fake protocol with consistent fake weights that still pass inspection. The whole point is that the Verifier does not trust the Prover in this scenario, so we assume everything the Prover can do to fool the Verifier will be done.


That means the timing of the weight snapshot needs to be random. The chip would send the weights to be stored in long-term storage of the machine it is connected to (controlled by the Prover), as well as a hash, so that long-term storage cannot be tempered with. The hash will need to be stored directly on the chip, where it cannot be edited by the Prover. 

This assumes such storage exists, and would require the chip producers (assumed to be a trusted third party) to build this functionality on the hardware level and sign the firmware (again so the Prover can’t use their own firmware). 
  

This is the core of the idea, however in practice the industry will try to keep their training data and hyperparameters secret, as they are very important trade secrets.

Also the Verifier can’t repeat the whole training run to check if it yields the correct weight snapshots.
  

Instead a trusted cluster would have to be built, that both Prover and Verifier trust, where parts of the training run can be repeated. The Prover would have to trust it enough to bring their actual training data and hyperparameters, while the Verifier would have to trust it enough to believe the resulting weights.

## Parallels to other industries

The closest parallel I could find is in nuclear components. There are random inspections by the responsible agencies, nuclear material is shipped in [cryptographically sealed containers](https://cbrnecentral.com/securityseal-detects-tampering-with-nuclear-material-containers/2532/) that detect tampering.


