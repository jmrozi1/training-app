# Project Vision

## Purpose

Build a strength-training application that helps people make consistent, measurable progress even when their schedules, recovery, and available training time are imperfect.

Most training applications assume that the user will follow a fixed routine under predictable conditions. Real training is messier: workouts are shortened, exercises are reordered, rest periods vary, fatigue accumulates, illness interrupts a block, and family or work obligations change what is possible. This application should preserve the intent of the training program through those disruptions rather than treating every deviation as failure.

## Product Vision

The application will act as a practical training system that:

- makes workout execution fast and low-friction;
- adapts recommendations using the lifter's actual performance and circumstances;
- distinguishes meaningful performance changes from differences caused by rest time, exercise order, fatigue, or missed sessions;
- keeps progression understandable, transparent, and under the user's control; and
- supports effective training without requiring a rigid schedule or constant attention to program administration.

The goal is not merely to record workouts. The goal is to help the user decide what to do next and explain why that recommendation follows from the available evidence.

## Intended User

The primary user is a lifter who understands basic exercises and wants a structured progression system, but whose life does not reliably fit a conventional training calendar.

The application should be especially useful to people who:

- train around work, family, travel, illness, or inconsistent recovery;
- need workouts that can expand or contract without losing their underlying purpose;
- want useful recommendations without handing control to an opaque algorithm; and
- value progressive overload but recognize that raw workout numbers require context.

## Core Product Principles

### Training must survive imperfect schedules

A missed day, shortened workout, altered exercise order, or unusual rest period should not invalidate the training process. The system should use the session that actually occurred and preserve as much useful progression data as possible.

### Recommendations must reflect context

Weight and repetition targets should account for relevant conditions such as prior performance, repetitions in reserve, rest time, exercise order, time since the previous session, and recent interruptions. Equal numbers achieved under meaningfully different conditions should not always be interpreted as equal performances.

### Progression must be evidence-based

The application should treat completed sets, missed targets, technical failure, and recovery conditions as evidence. It should not automatically reward every completed workout or punish every miss. Changes to future targets should follow explicit, testable rules.

### The system must remain understandable

The user should be able to see what the application recommends, what information influenced that recommendation, and how the recommendation can be changed. The application may automate decisions, but it should not conceal them.

### Workout interaction must stay lightweight

Logging a set should require minimal effort. The interface should support fast use during training, including circuits and time-sensitive rest periods, without turning the workout into a data-entry session.

### The user retains authority

The application may suggest changes to exercises, targets, schedules, or progression, but the user remains able to accept, reject, or override those changes. Automation should reduce administrative work rather than remove meaningful control.

## Product Boundaries

The application is intended to provide workout planning, execution, tracking, and progression guidance.

It is not intended to replace a personal trainer, physical therapist, physician, or exercise-instruction library. The initial product assumes that users already know how to perform the exercises they select. Training videos, live coaching, social features, and trainer marketplaces are outside the core vision unless the product direction is deliberately expanded later.

## Long-Term Direction

The initial implementation may be delivered as a progressive web application, but the product should be designed around portable domain rules and robust automated tests so that the same behavior can later be delivered through native mobile applications.

Artificial intelligence may eventually help users interpret unusual circumstances and propose routine changes, but the foundational progression system must remain deterministic, testable, and usable without continuous AI involvement.

## Definition of Success

The product succeeds when a user can open the application during a real, imperfect training week and quickly answer five questions:

1. What should I do now?
2. What should I record?
3. Did this performance represent progress?
4. What should I attempt next time?
5. Why is this my target?

The answers should remain useful even when the workout did not happen exactly as planned.
