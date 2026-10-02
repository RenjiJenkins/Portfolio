---
title: "Designing Combat Physics and State Machines for 'The Manifesto'"
date: "2026-10-01"
excerpt: "How I translated fantasy novel mechanics into responsive 2D combat systems using Unity and C#."
tags: ["GameDev", "Unity", "CSharp", "GameDesign"]
---

Translating the world and combat mechanics from a fantasy novel into a playable 2D fighting & adventure game has been one of my most exciting challenges. In *The Manifesto*, movement feel and attack frame data are everything.

## Architecture: Decoupled State Machines

To handle responsive attacks, dodge rolls, hit-stuns, and block cancels without spaghetti code, I implemented a hierarchical state machine (HSM) in C#:

- **Base Player State**: Handles ground detection, gravity, and input buffers.
- **Combat Sub-states**: Handle startup frames, active damage frames, and recovery windows.
- **Event-Driven Hitboxes**: Collision boxes trigger weapon contact events that query target hurtboxes and apply poise reduction.

## Lessons Learned in Game Feel

1. **Input Buffering is Crucial**: Registering inputs 4–6 frames before an animation completes makes combat feel snappy rather than unresponsive.
2. **Camera Shake & Freeze Frames**: A 2-frame micro-pause on heavy impact delivers that weighty, visceral impact feel.
3. **Decoupled Audio**: Separating weapon sound synthesis from animation events prevents audio clipping during rapid combo executions.

I document these workflows on my YouTube channel [@mgfsdev](https://www.youtube.com/@mgfsdev)—check out the latest devlogs to see the engine in action!
