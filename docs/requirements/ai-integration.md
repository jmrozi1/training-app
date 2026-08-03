# AI Integration Requirements

Status: Draft

## Purpose

Define how artificial intelligence assists users with operating the application, adjusting workouts and plans, and answering training questions while preserving user control, manual equivalence, and appropriate safety boundaries.

## 1. Copilot Model

### AI-COP-001 — Manual equivalence

Every application change the AI can perform shall also be available through a manual user workflow.

The AI shall act as an alternate interface to supported application behavior rather than as an unrestricted administrative backdoor.

### AI-COP-002 — Structured proposed changes

When the AI proposes an application change, it shall produce a structured change that the application can validate before applying.

The application shall reject unsupported, invalid, or internally inconsistent changes.

### AI-COP-003 — Change preview

Before applying a change that is not covered by an existing permission, the AI shall show:

- what will change;
- whether the change affects the current session, the reusable plan, progression state, or application settings;
- why the change is being proposed; and
- what relevant information will remain unchanged.

### AI-COP-004 — Approval options

For a proposed change, the user shall be able to:

- approve the change once;
- reject the change; or
- allow similar changes to be applied automatically in the future.

### AI-COP-005 — Narrow standing permissions

A standing permission shall describe a concrete class of similar changes rather than granting broad authority to modify training generally.

### AI-COP-006 — Applied-change report

After applying a change, the AI shall report what changed.

When the change was applied through a standing permission, the AI shall also identify where that permission can be reviewed, changed, or revoked.

### AI-COP-007 — Reversibility

AI-applied changes shall be reversible through the same mechanisms available for equivalent manual changes.

## 2. Application Assistance

### AI-APP-001 — Explain application use

The user shall be able to ask how to perform an action in the application.

The AI shall provide instructions that reflect the current application behavior and available settings.

### AI-APP-002 — Offer to perform supported actions

When the requested action is supported, the AI may offer to perform it on the user's behalf.

### AI-APP-003 — Identify relevant location

When explaining an application setting or action, the AI shall identify where the user can perform or configure it manually.

### AI-APP-004 — Unsupported actions

When an action is not supported, the AI shall state that limitation rather than inventing a setting or workflow.

### AI-APP-005 — Contextual explanations

The AI shall be able to explain current application state, including targets, adjustments, progression records, and relevant configuration, using the data available to the application.

## 3. Session and Plan Adjustment

### AI-ADJ-001 — Adjustment requests

The user shall be able to request changes based on circumstances including:

- limited available time;
- fatigue;
- illness;
- pain or injury;
- unavailable equipment;
- travel or temporary gym access;
- missed training; and
- changed priorities.

### AI-ADJ-002 — Adjustment scope

The AI shall distinguish among:

- changes to the current session only;
- changes to the reusable training plan; and
- changes to progression or target state.

The AI shall identify the proposed scope before applying a change.

### AI-ADJ-003 — Preserve completed work

Adjusting an in-progress session shall preserve completed and recorded work.

### AI-ADJ-004 — Preserve training intent

When compressing or adapting a workout, the AI shall attempt to preserve the plan's important training intent using the available time, equipment, and user constraints.

The exact prioritization rules remain subject to later refinement.

### AI-ADJ-005 — Explain adjustments

The AI shall explain the main reasons for substitutions, removals, target changes, or reordered work.

The user shall be able to request further detail.

### AI-ADJ-006 — Temporary environment adaptation

The AI may create a temporary version of an existing workout or plan based on equipment available in another environment.

The temporary adaptation shall not modify the reusable plan unless the user explicitly approves that broader change.

### AI-ADJ-007 — Equipment images

The AI may use user-provided images of available equipment as input when proposing a temporary plan.

The AI shall not claim that equipment is available when it cannot identify it with reasonable confidence.

### AI-ADJ-008 — Evidence handling

Work removed through an approved adjustment shall provide no evidence of success or failure.

Completed revised targets shall be evaluated using the normal target-generation rules.

## 4. Plan Creation and Coaching

### AI-PLN-001 — Guided plan creation

The user shall be able to create a training plan through conversation with the AI.

### AI-PLN-002 — Relevant planning inputs

The AI may ask for information needed to create a useful plan, including goals, experience, schedule, preferences, limitations, available equipment, and exercise restrictions.

The AI shall avoid requesting information that is not needed for the current planning decision.

### AI-PLN-003 — Proposed plan review

The AI shall present a proposed plan for review before creating or replacing a reusable plan.

### AI-PLN-004 — Honest domain guidance

When the user asks a training, recovery, or nutrition question, the AI shall answer the underlying domain question honestly before recommending relevant application features.

The AI shall not substitute product instructions for scientifically supported guidance merely because the application can assist with part of the goal.

### AI-PLN-005 — Goal interpretation

The AI shall distinguish between the user's stated goal and the mechanisms that materially contribute to that goal.

For example, a weight-loss goal shall not be treated as achievable through workout selection alone when nutrition and energy balance are central to the answer.

### AI-PLN-006 — Basis for recommendations

The AI shall be able to explain whether a recommendation is based on user data, research-supported guidance, conventional programming practice, product-specific heuristics, or uncertainty.

## 5. Pain, Injury, and Medical Ambiguity

### AI-MED-001 — Clarify before changing

When a request involves pain, injury, illness, or another potentially medical limitation, the AI shall clarify the affected movements and requested scope before applying changes.

### AI-MED-002 — Do not infer from labels alone

The AI shall not determine affected exercises solely from exercise names, primary muscle labels, or the user's initial description.

It shall consider that pain may affect pressing, pulling, carrying, stabilizing, setup, range of motion, or supporting external load.

### AI-MED-003 — Offer narrow and broad review scopes

When appropriate, the AI shall offer both:

- a narrow change to obvious affected movements; and
- a broader review of the current workout or plan.

### AI-MED-004 — Movement review

During a broader review, the AI may help the user identify movements or positions that reproduce the reported limitation and propose more tolerable alternatives.

The AI shall not present this process as a medical diagnosis.

### AI-MED-005 — Stop on concerning response

The AI shall not encourage the user to continue testing a movement that causes significant, worsening, or concerning pain or symptoms.

### AI-MED-006 — Medical boundary

The AI shall distinguish training modification from diagnosis, treatment, and rehabilitation.

It shall not claim to diagnose an injury or prescribe medical rehabilitation.

### AI-MED-007 — Professional evaluation

The AI shall recommend evaluation by an appropriate medical professional or physical therapist when the reported severity, duration, symptoms, uncertainty, or mechanism suggests that ordinary training modification may be inappropriate.

### AI-MED-008 — Avoid reflexive alarm

The AI shall not treat every minor soreness, bump, or transient discomfort as an emergency.

Its response shall be proportionate to the information provided while remaining explicit about uncertainty.

## 6. Context, Transparency, and Limits

### AI-CTX-001 — Relevant application context

The AI may use relevant application state, including the current session, reusable plans, exercise settings, targets, performance history, available equipment, and user-provided constraints.

### AI-CTX-002 — No invented facts

The AI shall not infer missing user history, equipment, symptoms, preferences, or application state as established fact.

### AI-CTX-003 — Clarification when material

The AI shall ask for clarification when missing or ambiguous information would materially change a recommendation or proposed application change.

### AI-CTX-004 — Concise-first explanation

The AI shall provide a concise explanation by default and allow the user to request the detailed reasoning, assumptions, evidence, and uncertainty.

### AI-CTX-005 — Evidence distinctions

The AI shall distinguish among:

- user-specific evidence;
- research-supported guidance;
- conventional training practice;
- product-specific heuristics; and
- unresolved uncertainty.

### AI-CTX-006 — Capability limits

The AI shall communicate when it lacks sufficient information, when the application lacks a required capability, or when a recommendation cannot be made reliably.

## 7. Open Questions

The following details remain intentionally unresolved:

- how standing permissions are represented and matched to new requests;
- which low-risk changes, if any, may be applied without a preview;
- the exact structured-change schema used between the AI and application;
- how undo history is presented for AI-applied changes;
- the prioritization model used when compressing workouts;
- how equipment images are reviewed and confirmed by the user;
- the detailed screening questions used for pain, injury, or illness;
- the thresholds for recommending professional evaluation; and
- how AI availability, cost, offline use, and failure states affect manual workflows.
