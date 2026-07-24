# Chapter 2: The Idea of a Limit

## Part 0: Structural Element Inventory

### DEFINITION boxes
- 2.2 Limit
- 2.4 Continuity at a Point
- 2.4 One-Sided Continuity
- 2.4 Continuity on an Interval I

### THEOREM boxes
- 2.2 Theorem 1 (Limits of constants and x)
- 2.3 Theorem 1 Basic Limit Laws
- 2.4 Theorem 1 Basic Laws of Continuity
- 2.4 Theorem 2 Continuity of Polynomial and Rational Functions
- 2.4 Theorem 3 Continuity of Some Basic Functions
- 2.4 Theorem 4 Continuity of the Inverse Function
- 2.4 Theorem 5 Continuity of Composite Functions
- 2.6 Theorem 1 Squeeze Theorem
- 2.6 Theorem 2 Important Trigonometric Limits
- 2.6 Theorem 3 (Inequalities for Squeeze Theorem proof)
- 2.7 Theorem 1 (Limits of power functions at infinity)
- 2.7 Theorem 2 Limits at Infinity of a Rational Function
- 2.8 Theorem 1 Intermediate Value Theorem
- 2.8 Corollary 2 Existence of Zeros

### CAUTION notes
- 2.2 Numerical investigations may be misleading
- 2.2 Infinite limits are not numbers
- 2.4 Piecewise-defined functions may or may not be continuous
- 2.4 Substitution cannot be applied if the function is not continuous
- 2.7 Limits at infinity of square roots

### REMINDER notes
- 2.2 "Large" refers to distance from zero
- 2.4 Domain of $y = x^{1/n}$
- 2.6 Sector area in unit circle
- 2.8 A zero or root of a function

### CONCEPTUAL INSIGHT boxes
- 2.2 Indeterminate forms and limits
- 2.2 Infinite limits are not numbers
- 2.4 Real-World Modeling by Continuous Functions
- 2.5 Undefined, Does Not Exist, and Indeterminate
- 2.8 The IVT and the completeness property of real numbers
- 2.9 Formal definition of a limit


## Sections in This Chapter
- 2.1 Why Limits? Speed and Steepness
- 2.2 Estimating Limits from Tables and Graphs
- 2.3 Rules for Computing Limits
- 2.4 Continuity: Graphs Without Breaks
- 2.5 Resolving 0/0: Indeterminate Forms
- 2.6 The Squeeze Trick and the Sine Limit
- 2.7 End Behavior: Limits at Infinity
- 2.8 No Jumping Over Values: The Intermediate Value Theorem
- 2.9 Making "Approaches" Precise: The ε–δ Definition

## Knowledge Dependencies
- **2.1 The Limit Idea** → Provides the physical and geometric motivation for limits, fundamental to all other sections in this chapter.
- **2.2 Investigating Limits** → Introduces the intuitive definition of limits, necessary for establishing the limit laws in 2.3.
- **2.3 Basic Limit Laws** → Provides the algebraic tools for evaluating limits, heavily used in 2.4, 2.5, and 2.7.
- **2.4 Limits and Continuity** → Relies on the limit concept; defines functions that can be evaluated by substitution. It is a prerequisite for the Intermediate Value Theorem (2.8) and the study of derivatives in Chapter 3.
- **2.5 Indeterminate Forms** → Builds on limit laws to handle algebraic functions where direct substitution fails; critical for the derivative definition in Chapter 3.
- **2.6 The Squeeze Theorem and Trigonometric Limits** → Uses the limit concept to prove a crucial limit needed for the derivative of $\sin x$ in Section 3.6.
- **2.7 Limits at Infinity** → Extends the limit concept to the "ends" of the real line; used later in curve sketching and analyzing the end behavior of functions.
- **2.8 The Intermediate Value Theorem** → Uses continuity as a prerequisite; heavily used in root-finding algorithms (Bisection Method) and proving the existence of solutions to equations.
- **2.9 The Formal Definition of a Limit** → The rigorous $\epsilon-\delta$ foundation for all of calculus. Used to prove the limit laws in later analysis courses; sets the stage for a rigorous understanding of derivatives.

---
## Part 2: Section-by-Section Content

## 2.1 Why Limits? Speed and Steepness

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Average Velocity | The rate of change of position over a time interval; calculated as change in position divided by change in time. |
| Secant Line | A straight line that passes through two distinct points on the graph of a function. |
| Instantaneous Velocity | The rate of change of position at a single, specific moment in time. |
| Tangent Line | The limiting position of secant lines through a point on the graph; its slope matches the graph's slope at that point. (It may intersect the curve at other points elsewhere.) |

### 2. Why This Section Matters
This section serves as the motivation for defining the concept of a limit. The fundamental problems of differential calculus are finding the instantaneous velocity of a moving object and finding the slope of a tangent line to a curve. Both problems cannot be solved with simple algebra using standard formulas (because dividing by zero is involved), requiring the use of a limit as the time interval or the horizontal distance shrinks to zero.

### 3. Core Cards

**Card 1: Average Velocity**
- Type: Formula
- Statement: The average velocity of an object in linear motion over a time interval $[t_0, t_1]$ is the ratio of the change in position $s(t)$ to the change in time $\Delta t$:
  $$
 \text{Average Velocity} = \frac{\text{change in position}}{\text{change in time}} = \frac{s(t_1) - s(t_0)}{t_1 - t_0} = \frac{\Delta s}{\Delta t} 
$$
- Conditions / scope: Valid over any time interval of non-zero length.
- Note: The average velocity is also the slope of the secant line connecting the points $(t_0, s(t_0))$ and $(t_1, s(t_1))$ on the graph of the position function.

**Card 2: Instantaneous Velocity**
- Type: Definition / Formula
- Statement: The instantaneous velocity at a specific time $t_0$ is the limit of the average velocities as the time interval shrinks to zero.
  $$
 \text{Instantaneous Velocity} = \lim_{\Delta t \to 0} \text{Average Velocity} = \lim_{\Delta t \to 0} \frac{s(t_0 + \Delta t) - s(t_0)}{\Delta t} 
$$
- Conditions / scope: Requires the limit to exist at $t_0$.
- Note: Instantaneous velocity is also the slope of the tangent line to the position graph at time $t_0$.

**Card 3: Secant Line Slope**
- Type: Formula
- Statement: For a function $f(x)$, the slope of the secant line passing through the points $(x_1, f(x_1))$ and $(x_2, f(x_2))$ is:
  $$
 m_{\text{secant}} = \frac{f(x_2) - f(x_1)}{x_2 - x_1} 
$$
- Conditions / scope: Requires $x_1 \neq x_2$.
- Note: Geometrically, it represents the average rate of change of $f$ over the interval $[x_1, x_2]$.

**Card 4: Tangent Line Slope**
- Type: Definition / Formula
- Statement: The slope of the tangent line to the graph of $f(x)$ at a point $(x_0, f(x_0))$ is the limit of the secant line slopes as the second point approaches the first point. It is given by:
  $$
 m_{\text{tangent}} = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} 
$$
- Conditions / scope: Requires the limit to exist.
- Note: This is the fundamental definition of the derivative, which will be explored fully in Chapter 3.

### 4. Methods and Techniques
- **Estimating Instantaneous Velocity / Tangent Slopes:**
    - Compute the average velocity (or secant slope) over several small intervals $[t_0, t_1]$ where $t_1$ gets progressively closer to $t_0$. By observing the trend of these computed values, you can estimate the limiting instantaneous velocity (or tangent slope).

### 5. Common Pitfalls
- ❌ **Mistake:** Confusing average velocity with instantaneous velocity. They are different quantities.
    - ✅ **Correct Understanding:** Average velocity is a property of an *interval*, while instantaneous velocity is the limit as the interval length approaches zero, making it a property of a specific *instant*.
- ❌ **Mistake:** Trying to define instantaneous velocity as a straight ratio with $\Delta t = 0$ (division by zero).
    - ✅ **Correct Understanding:** The limit process avoids division by zero by looking at values arbitrarily close to zero, but never equal to it.
- ❌ **Mistake:** Believing the slope of the tangent line must be calculated using two distinct points on the graph.
    - ✅ **Correct Understanding:** The tangent line is defined by the *limit* of secant lines as the two points merge into one.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The core insight provided by this section (and highlighted in **CONCEPTUAL INSIGHT** indirectly) is that physical phenomena like a moving object or geometric lines can be analyzed using the "shrink to zero" limit process. While physically we can measure average speeds, instantaneous speed is a mathematical ideal. The geometric connection is that secant lines physically "rotate" into the tangent line as the second point gets closer to the first, providing a mental image of "convergence".

(b) **Visualization Suggestions:**
- **Component 1: Secant to Tangent Visualization**
    - *What it shows:* The graph of a position function (or any $f(x)$) with a point $P$ pinned on the curve. A second point $Q$ slides along the curve closer to $P$.
    - *Parameters:* User can slide $Q$ along the curve or input the distance $\Delta x$ numerically.
    - *Observation:* As $Q$ approaches $P$, the computed slope of the blue secant line (shown numerically) approaches a fixed number, and the secant line visually rotates into a red tangent line.
- **Component 2: Instantaneous Velocity via Average Velocities Table**
    - *What it shows:* A table generating average velocities for intervals $[2, 2.1], [2, 2.01], [2, 2.001]$, etc., for a given $s(t)$.
    - *Parameters:* The ability to change the specific time $t_0$ and the starting value of the interval.
    - *Observation:* The user observes the numbers in the table converging to a single fixed decimal, revealing the instantaneous velocity.

### 7. Concept Self-Check (original)
**Q1.** True or False: The slope of the secant line over $[t_0, t_1]$ on a position function $s(t)$ is exactly equal to the instantaneous velocity at time $t_0$.
- Answer: False.
- Explanation: The secant line slope is the *average* velocity over the interval, which differs from the instantaneous velocity at $t_0$ unless the velocity is constant.

**Q2.** What happens to the secant lines on a graph of $y = f(x)$ as the horizontal distance between the two intersection points approaches zero?
- Answer: They approach the tangent line.
- Explanation: As the second point merges into the first, the secant lines "rotate" and their limiting position is defined as the tangent line to the curve at that point.

**Q3.** You throw a ball straight up and it returns to your hand. Is the average velocity over the entire trip positive, negative, or zero?
- Answer: Zero.
- Explanation: The change in position is zero (it starts and ends in the same location), so $\Delta s = 0$, and average velocity is $\frac{0}{\Delta t} = 0$.

**Q4.** What graphical feature corresponds to the instantaneous velocity of a falling object at $t = 3$ seconds?
- Answer: The slope of the tangent line to the position vs. time graph at $t = 3$.
- Explanation: The slope of the tangent line at a specific time represents the rate of change of position at that instant.

**Q5.** If the average velocity over $[0, 4]$ is $20$ m/s, does this guarantee the object's instantaneous velocity was $20$ m/s at $t = 2$?
- Answer: No.
- Explanation: Average velocity only describes the total displacement over a time interval. The object could have been speeding up and slowing down during that time.

## 2.2 Estimating Limits from Tables and Graphs

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Limit | The value that a function $f(x)$ approaches as the input $x$ gets arbitrarily close to a number $c$. |
| One-Sided Limit | The limit of $f(x)$ as $x$ approaches $c$ only from values less than $c$ (left-hand) or greater than $c$ (right-hand). |
| Infinite Limit | A description of the behavior of a function whose values become arbitrarily large (positive or negative) as $x$ approaches $c$. |
| Vertical Asymptote | A vertical line $x = c$ that the graph of a function approaches infinitely closely as $x$ approaches $c$ from one or both sides. |

### 2. Why This Section Matters
This section formally defines the core concept of calculus: the limit. It moves beyond the motivational examples of the previous section and establishes the language, notation, and intuitive understanding needed for the rest of the chapter. It demonstrates that limits can exist even when the function itself is undefined at the point in question, and establishes the critical difference between left- and right-hand limits.

### 3. Core Cards

**Card 1: Limit of a Function**
- Type: Definition
- Statement: We say the limit of $f(x)$ as $x$ approaches $c$ is equal to $L$, written as $\lim_{x \to c} f(x) = L$, if $|f(x) - L|$ can be made arbitrarily small by taking $x$ sufficiently close (but not equal) to $c$.
- Conditions / scope: $f(x)$ must be defined for all $x$ in an open interval containing $c$, though it need not be defined at $x=c$ itself.
- Note: If the limit exists, the value $L$ is unique.

**Card 2: One-Sided Limits**
- Type: Definition
- Statement:
    - The **left-hand limit** as $x$ approaches $c$ from values less than $c$ is denoted by $\lim_{x \to c^{-}} f(x)$.
    - The **right-hand limit** as $x$ approaches $c$ from values greater than $c$ is denoted by $\lim_{x \to c^{+}} f(x)$.
- Conditions / scope: The two-sided limit $\lim_{x \to c} f(x)$ exists if and only if both one-sided limits exist and are equal to the same value $L$.
- Note: Many functions are defined only on one side of a point, making one-sided limits essential.

**Card 3: Infinite Limits**
- Type: Definition
- Statement: If $f(x)$ is positive and becomes arbitrarily large as $x \to c$, we write $\lim_{x \to c} f(x) = \infty$. If it is negative and becomes arbitrarily large in magnitude, we write $\lim_{x \to c} f(x) = -\infty$.
- Conditions / scope: These are called "infinite limits" to describe unbounded behavior; the limit itself *does not exist* as a finite number. One-sided infinite limits are defined similarly.
- Note: The vertical line $x = c$ is called a **vertical asymptote** if the function approaches $\pm \infty$ as $x \to c$ from at least one side.

### 4. Methods and Techniques
- **Graphical Investigation:** Use a graphing utility to plot the function near $x=c$ and observe if the graph approaches a single $y$-value as $x$ approaches $c$ from both sides.
- **Numerical Investigation:**
    - Make two tables of values of $f(x)$: one approaching $c$ from the left ($x < c$) and one approaching $c$ from the right ($x > c$).
    - If both tables show the values converging to the same number $L$, then $\lim_{x \to c} f(x) \approx L$.
    - If the numerical values do not settle on a single number or bounce around, the limit likely does not exist.

### 5. Common Pitfalls
- ❌ **CAUTION:** Relying solely on numerical investigations can be misleading.
    - ✅ **Correct Understanding:** Numerical patterns sometimes hide oscillating behavior. For example, a function like $\sin(\pi/x)$ evaluated at $x = 0.1, 0.01, 0.001$ will always return $0$, suggesting a limit of $0$, but plotting the function reveals it oscillates wildly between $-1$ and $1$ and has no limit. Numerical evidence is suggestive, not proof.
- ❌ **CAUTION:** Treating $\infty$ as a real number.
    - ✅ **Correct Understanding:** $\infty$ is not a number that can be manipulated algebraically. Writing $\lim_{x \to c} f(x) = \infty$ simply means the function grows without bound; the limit technically "does not exist." Manipulating $\infty$ with arithmetic leads to contradictions (e.g., $\infty + 1 = \infty \implies 1 = 0$).
- ❌ **Mistake:** Assuming the limit exists if the function is defined at $c$.
    - ✅ **Correct Understanding:** The function's value at $c$ is irrelevant to the limit. The limit depends only on the behavior of $f(x)$ *near* $c$, not *at* $c$.
- ❌ **Mistake:** Assuming $\frac{0}{0}$ equals 1 or any other specific number.
    - ✅ **Correct Understanding:** $\frac{0}{0}$ is an undefined expression. Its value depends entirely on the specific function in question and must be evaluated using limit tools rather than simple division.
- ❌ **Mistake:** Forgetting to check one-sided limits.
    - ✅ **Correct Understanding:** The two-sided limit exists **if and only if** both the left-hand and right-hand limits exist *and* are equal to the same value.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT highlights the difference between an undefined expression like $0/0$ and a limit. The process of evaluating a limit is distinct from evaluating a function. The graph of a function can have a missing point (a "hole" or gap) at $x=c$, yet still approach a specific $y$-value $L$ on either side of the hole. Visually, the limit describes the *intended* value of the point to complete the graph smoothly.

(b) **Visualization Suggestions:**
- **Component 1: Graphical Limit Exploration**
    - *What it shows:* A graph of a function $f(x)$ with a hole at $x=c$. Two points on the curve approaching $c$ from the left and right are highlighted.
    - *Parameters:* User can drag the points to shrink the distance to $c$.
    - *Observation:* As the points get closer to $c$, their $y$-values get closer to the same value $L$.
- **Component 2: Oscillating Function Visualizer**
    - *What it shows:* A graph of a function like $\sin(\pi/x)$ as $x \to 0$. It has a vertical asymptote-like behavior but oscillates infinitely fast.
    - *Parameters:* Zoom in on $x=0$.
    - *Observation:* No matter how close you zoom in, the curve never approaches a single value; it always oscillates between $-1$ and $1$.

### 7. Concept Self-Check (original)
**Q1.** If $\lim_{x \to 3^-} f(x) = 5$ and $\lim_{x \to 3^+} f(x) = 7$, what can you conclude about $\lim_{x \to 3} f(x)$?
- Answer: It does not exist.
- Explanation: The two-sided limit exists only if the left and right limits are equal. Here $5 \neq 7$.

**Q2.** If $f(2)$ is undefined, is it possible that $\lim_{x \to 2} f(x)$ exists?
- Answer: Yes.
- Explanation: Limits are defined by the behavior of $f(x)$ for $x$ near $c$, not at $c$ itself. A function can have a hole at $x=2$ but still have a limit as $x \to 2$.

**Q3.** Does $\lim_{x \to 4} \frac{x^2 - 16}{x-4}$ equal $0/0$?
- Answer: No, $0/0$ is not a value. The limit represents a value that will be determined by evaluating the expression as $x$ gets close to 4.
- Explanation: The expression produces an indeterminate form, indicating we must do further work. After factoring and simplifying, the limit is found to be 8.

**Q4.** If $\lim_{x \to c} f(x) = \infty$, does the limit exist in the numerical sense?
- Answer: No.
- Explanation: The notation with $\infty$ means the function grows without bound. It does not converge to a finite number, so the limit "does not exist", though we use this notation to describe the unbounded behavior.

**Q5.** What is the definition of a vertical asymptote?
- Answer: A vertical line $x = c$ is a vertical asymptote if the function approaches $\pm \infty$ as $x \to c$ from one or both sides.
- Explanation: The graph becomes unbounded as it approaches the line $x = c$ from that side. (Note: the function may still be defined at $x = c$ itself; "the graph never touches the asymptote" is a common myth.)

## 2.3 Rules for Computing Limits

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Sum Law | The limit of a sum is the sum of the limits. |
| Constant Multiple Law | The limit of a constant multiplied by a function is the constant multiplied by the limit. |
| Product Law | The limit of a product is the product of the limits. |
| Quotient Law | The limit of a quotient is the quotient of the limits (provided the denominator limit is not zero). |
| Power/Root Laws | The limit of a power/root is the power/root of the limit. |

### 2. Why This Section Matters
This section provides the essential algebraic rules that allow us to calculate limits precisely and systematically, moving beyond the guesswork of numerical or graphical estimation. The limit laws are the foundational tools for the algebra of calculus; they enable us to break complex functions into simpler parts to evaluate them directly.

### 3. Core Cards

**Card 1: Basic Limit Laws (Theorem 1)**
- Type: Theorem
- Statement: If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$ both exist, then:
    1.  **(Sum Law):** $\lim_{x \to c} [f(x) + g(x)] = L + M$
    2.  **(Constant Multiple Law):** $\lim_{x \to c} [k \cdot f(x)] = k \cdot L$ (for any constant $k$)
    3.  **(Product Law):** $\lim_{x \to c} [f(x) \cdot g(x)] = L \cdot M$
    4.  **(Quotient Law):** $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$ if $M \neq 0$.
    5.  **(Power/Root Law for integers):** $\lim_{x \to c} [f(x)]^n = L^n$ for any positive integer $n$, and $\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{L}$ assuming $L \ge 0$ if $n$ is even.
- Conditions / scope: Every individual limit in the application of the law must exist. For the Quotient Law, the denominator limit cannot be zero.
- Note: The Sum and Product Laws can be extended to any finite number of functions.

**Card 2: Limits of Simple Functions**
- Type: Theorem
- Statement: For any constants $k$ and $c$:
    1.  $\lim_{x \to c} k = k$
    2.  $\lim_{x \to c} x = c$
- Conditions / scope: Always true.
- Note: These are the simplest building blocks of the limit laws. Using the Power/Root Laws, we can extend $\lim_{x \to c} x = c$ to $\lim_{x \to c} x^{p/q} = c^{p/q}$ (valid whenever $c^{p/q}$ is defined; requires $c \ge 0$ when $q$ is even).

### 4. Methods and Techniques
- **Direct Application:** To evaluate the limit of a polynomial, rational, or radical function at a point $c$, you can sequentially apply the Basic Limit Laws. For example, $\lim_{x \to 2} (x^2 + 5x)$ is evaluated by applying the Sum Law, then the Power Law for $x^2$, the Constant Multiple Law for $5x$, and substituting the simple limits of $x$ and constants.
- **Sequence of Evaluation:** Break the expression down into the fundamental operations. Ensure each component limit exists before applying the law for the final operation. Always check the denominator of a quotient to ensure its limit is not zero before applying the Quotient Law.

### 5. Common Pitfalls
- ❌ **Mistake:** Applying the Product or Quotient Law to functions whose individual limits do not exist.
    - ✅ **Correct Understanding:** If $\lim_{x \to c} f(x)$ or $\lim_{x \to c} g(x)$ does not exist, you cannot apply the Product/Quotient Law. For example, $\lim_{x \to 0} (x \cdot \frac{1}{x}) = \lim_{x \to 0} 1 = 1$, but you cannot use the Product Law because $\lim_{x \to 0} \frac{1}{x}$ does not exist.
- ❌ **Mistake:** Applying the Quotient Law when the limit of the denominator is $0$.
    - ✅ **Correct Understanding:** The Quotient Law explicitly states $\lim_{x \to c} g(x) \neq 0$. If the limit of the denominator is zero, the result may be an undefined infinite limit or an indeterminate form, and the law cannot be used.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The basic limit laws are intuitive algebra. If two quantities $f(x)$ and $g(x)$ are approaching specific numbers $L$ and $M$, then it is logical that their sum approaches $L+M$ and their product approaches $L \cdot M$. It's the algebraic rigor behind the visual intuition of the graphs "approaching" a point.

(b) **Visualization Suggestions:**
- **Component 1: Sum Law Visualizer**
    - *What it shows:* Three graphs: $y = f(x)$, $y = g(x)$, and $y = f(x) + g(x)$. A vertical line representing $x = c$ is drawn, highlighting the $y$-values of the first two graphs and their sum on the third.
    - *Parameters:* The ability to change $c$ dynamically or animate $x$ approaching $c$.
    - *Observation:* As $x$ gets close to $c$, the limit of the sum approaches the sum of the individual limits.

### 7. Concept Self-Check (original)
**Q1.** If $\lim_{x \to 2} f(x) = 4$ and $\lim_{x \to 2} g(x) = 0$, can you use the Quotient Law to evaluate $\lim_{x \to 2} \frac{f(x)}{g(x)}$?
- Answer: No.
- Explanation: The limit of the denominator is zero ($0$), which violates the condition for the Quotient Law. The limit may not exist, be infinite, or be an indeterminate form.

**Q2.** Evaluate $\lim_{x \to 3} (4x^2 - 2x + 1)$ using the limit laws.
- Answer: $31$.
- Explanation: Apply the Sum, Constant Multiple, and Power Laws: $4(3^2) - 2(3) + 1 = 36 - 6 + 1 = 31$.

**Q3.** True or False: $\lim_{x \to 0} [f(x) \cdot g(x)]$ always equals $[\lim_{x \to 0} f(x)] \cdot [\lim_{x \to 0} g(x)]$.
- Answer: False.
- Explanation: This equality requires that both individual limits exist. If one does not, the Product Law cannot be applied, though the product limit might still exist.

**Q4.** What is the sum law stated in your own words?
- Answer: The limit of a sum of two or more functions is equal to the sum of their individual limits, assuming each of those individual limits exists.
- Explanation: This law allows us to evaluate complex polynomial terms one by one.

**Q5.** If $f(x) = x^{-2}$ and $c = 0$, does $\lim_{x \to 0} f(x)$ exist?
- Answer: No, the limit does not exist (it is an infinite limit, $\infty$).
- Explanation: $x^{-2} = 1/x^2$. As $x \to 0$, $1/x^2$ grows without bound. Therefore the limit does not exist.

## 2.4 Continuity: Graphs Without Breaks

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Continuity at a Point | A function is continuous at a point if the limit at that point equals the function's value there. |
| Discontinuity | A break in the graph of a function. A function that is not continuous at $c$. |
| Removable Discontinuity | A discontinuity that can be fixed by redefining the function at a single point (a "hole"). |
| Jump Discontinuity | A discontinuity where the left-hand and right-hand limits exist but are not equal, creating a "jump" in the graph. |
| Infinite Discontinuity | A discontinuity where the function approaches $\pm\infty$ as $x$ approaches $c$. |
| One-Sided Continuity | A function is left-continuous if the left-hand limit equals the function value; right-continuous if the right-hand limit equals the function value. |

### 2. Why This Section Matters
Continuity is the property that makes the limit laws useful; it allows us to evaluate limits of simple functions by direct substitution. Furthermore, continuity is the prerequisite for the Intermediate Value Theorem in Section 2.8, which is a cornerstone for proving the existence of solutions to equations. The chapter on derivatives also assumes that functions are continuous.

### 3. Core Cards

**Card 1: Continuity at a Point**
- Type: Definition
- Statement: A function $f(x)$ is continuous at a point $x = c$ if the following three conditions are met:
    1.  $f(c)$ is defined.
    2.  $\lim_{x \to c} f(x)$ exists.
    3.  $\lim_{x \to c} f(x) = f(c)$.
- Conditions / scope: Requires $f$ to be defined on an open interval containing $c$.
- Note: If any of these three conditions fails, the function is discontinuous at $c$.

**Card 2: Types of Discontinuity**
- Type: Definition
- Statement:
    - **Removable Discontinuity:** $\lim_{x \to c} f(x)$ exists, but either $f(c)$ is not defined or $\lim_{x \to c} f(x) \neq f(c)$. It can be "removed" by setting $f(c) = \lim_{x \to c} f(x)$.
    - **Jump Discontinuity:** Both one-sided limits exist but are not equal ($\lim_{x \to c^{-}} f(x) \neq \lim_{x \to c^{+}} f(x)$). The function "jumps" from one value to another.
    - **Infinite Discontinuity:** The function has an infinite limit ($\infty$ or $-\infty$) as $x \to c$ from one or both sides.
- Conditions / scope: These categorize the fundamental ways a graph can be broken.

**Card 3: One-Sided Continuity**
- Type: Definition
- Statement:
    - A function $f$ is **left-continuous** at $x = c$ if $\lim_{x \to c^{-}} f(x) = f(c)$.
    - A function $f$ is **right-continuous** at $x = c$ if $\lim_{x \to c^{+}} f(x) = f(c)$.
- Conditions / scope: Usually applied to functions whose domains start/end at a specific point, or to piecewise functions at the "seams".

**Card 4: Continuity on an Interval**
- Type: Definition
- Statement: $f$ is continuous on an interval $I$ if it is continuous at every point inside $I$, is right-continuous at the left endpoint $a$ (if $a \in I$), and is left-continuous at the right endpoint $b$ (if $b \in I$).
- Conditions / scope: Applies to closed, open, or half-open intervals.

**Card 5: Continuity Laws and Basic Functions**
- Type: Theorem
- Statement:
    1.  **Continuity Laws:** Sums, differences, products, constant multiples, and quotients (where denominator $\neq 0$) of continuous functions are continuous.
    2.  **Basic Functions:** Polynomials, rational functions (on their domains), power/root functions (on their domains), trigonometric functions, exponential functions, and logarithmic functions (on their domains) are continuous everywhere on their domains.
    3.  **Composition:** The composition $f(g(x))$ of continuous functions is continuous wherever $g(x)$ is continuous and $f$ is continuous at $g(x)$.
    4.  **Inverses:** The inverse of a continuous function is continuous on its domain.
- Conditions / scope: These laws allow us to determine continuity of complex functions by inspecting their components.

**Card 6: The Substitution Method**
- Type: Method
- Statement: If $f(x)$ is known to be continuous at $x = c$, then the limit can be evaluated by simple substitution:
  $$
 \lim_{x \to c} f(x) = f(c) 
$$
- Conditions / scope: The function must be continuous at $x = c$. If it's not continuous (e.g., a jump), the method fails.

### 4. Methods and Techniques
- **Testing for Continuity:** Check the three conditions: (1) Is $f(c)$ defined? (2) Does $\lim_{x \to c} f(x)$ exist? (3) Are they equal? If any fail, it's a discontinuity.
- **Classifying Discontinuities:** Determine the type based on behavior: use the definition for removable (limit exists), check one-sided limits for jump (exist but not equal), and check asymptotes for infinite discontinuities.
- **Using the Substitution Method:** For any function known to be continuous at $c$ (such as polynomials or trig functions at their domain points), simply plug $c$ into $f(x)$ to evaluate the limit.

### 5. Common Pitfalls
- ❌ **CAUTION:** Assuming a piecewise-defined function is continuous at the point where the formula changes.
    - ✅ **Correct Understanding:** For a piecewise function, you must explicitly check the left- and right-hand limits at the transition point. Both must exist and be equal to the function's value at that exact point.
- ❌ **CAUTION:** Assuming you can always use substitution to evaluate a limit.
    - ✅ **Correct Understanding:** Substitution is valid *only* if the function is continuous at the point in question. For example, $f(x) = \lfloor x \rfloor$ is not continuous at integer points, so substitution fails there.
- ❌ **Mistake:** Concluding a limit does not exist because $f(c)$ is undefined.
    - ✅ **Correct Understanding:** A function can have a removable discontinuity (a hole). In such cases, the limit exists even though $f(c)$ is undefined.
- ❌ **Mistake:** Confusing an infinite limit with an infinite discontinuity. An infinite limit is *why* a function has an infinite discontinuity, but the discontinuity is the property of the function, not the limit value.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT highlights that continuity is often an *assumption* in real-world models. While natural phenomena like temperature or population appear continuous at a macro level, they are technically discrete (made of molecules, individuals) at a micro level. We use continuous functions to model them because it is mathematically convenient and practically accurate for large scales. A continuous function has no "breaks", "jumps", or "holes" in its graph.

(b) **Visualization Suggestions:**
- **Component 1: Types of Discontinuity Visualizer**
    - *What it shows:* Four graphs next to each other: A continuous curve, a curve with a hole (removable), a curve with a jump (jump discontinuity), and a curve approaching a vertical line (infinite discontinuity). The key features are highlighted and labeled.
    - *Parameters:* None required, just static comparison or the ability to move points to observe limits.
    - *Observation:* Allows the user to visually distinguish between the different ways a function can fail to be continuous.
- **Component 2: Piecewise Function Continuity Checker**
    - *What it shows:* A graph of a piecewise function where the user can adjust the constant parameter (e.g., the y-intercept) of one piece.
    - *Parameters:* A slider to change the constant affecting the second piece of the function.
    - *Observation:* As the slider is moved, the user can see the two pieces align to make the graph continuous (where the limit equals the function value) or separate to make it discontinuous.

### 7. Concept Self-Check (original)
**Q1.** For a function $f$ to be continuous at $x = c$, what three specific conditions must be met?
- Answer: 1) $f(c)$ is defined, 2) $\lim_{x \to c} f(x)$ exists, and 3) $\lim_{x \to c} f(x) = f(c)$.
- Explanation: These three conditions mathematically guarantee that there are no breaks, jumps, or holes in the graph of $f$ at $c$.

**Q2.** You have a function $f(x)$ defined such that $\lim_{x \to 2} f(x) = 4$, but $f(2) = 10$. What type of discontinuity does $f$ have at $x=2$?
- Answer: A removable discontinuity.
- Explanation: Because the limit exists, the function can be made continuous at $x=2$ simply by redefining $f(2) = 4$.

**Q3.** You are given $\lim_{x \to 3^{-}} g(x) = 1$ and $\lim_{x \to 3^{+}} g(x) = 5$. Is $g$ continuous at $x = 3$?
- Answer: No.
- Explanation: The two-sided limit does not exist because the left and right limits are not equal ($1 \neq 5$). Therefore, the condition $\lim_{x \to 3} g(x) = g(3)$ cannot be met.

**Q4.** Is the function $f(x) = \frac{x^2-1}{x-1}$ continuous at $x=1$?
- Answer: No.
- Explanation: $f(1)$ is undefined (division by zero), so it fails the first condition for continuity.

**Q5.** If a function $f(x)$ is left-continuous at $x=4$, what must be true?
- Answer: $\lim_{x \to 4^{-}} f(x) = f(4)$.
- Explanation: Left-continuity specifically requires that as $x$ approaches 4 from values less than 4, the limit equals the function value at 4.

## 2.5 Resolving 0/0: Indeterminate Forms

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Indeterminate Form | An expression (like $0/0$, $\infty/\infty$, $\infty - \infty$) that indicates a limit cannot be determined from the form alone and requires further analysis. |
| Simplify and Substitute | A two-step method for evaluating indeterminate $0/0$ limits by factoring and canceling terms before substituting. |
| Conjugate | A binomial expression of the form $\sqrt{a} + \sqrt{b}$, which is the conjugate of $\sqrt{a} - \sqrt{b}$; multiplying by it helps rationalize numerators/denominators. |

### 2. Why This Section Matters
In Chapter 3, calculating derivatives will involve evaluating limits that result in indeterminate forms (specifically $0/0$). This section provides the algebraic foundation for evaluating these limits, which is essential for formal derivative calculations. It equips students with the techniques to "remove" the indeterminacy and find the limit value.

### 3. Core Cards

**Card 1: Indeterminate Form**
- Type: Definition
- Statement: A function $f(x)$ has an indeterminate form at $x = c$ if the formula for $f(c)$ yields an undefined expression such as:
    - $\frac{0}{0}$
    - $\frac{\infty}{\infty}$
    - $\infty \cdot 0$
    - $\infty - \infty$
- Conditions / scope: An indeterminate form is a signal to perform further algebraic or analytical work; it does not mean the limit does not exist.
- Note: The form $\frac{a}{0}$ with $a \neq 0$ is **not** indeterminate; it signals that the limit does not exist (it's an infinite limit).

**Card 2: Strategies for Evaluating Indeterminate Forms**
- Type: Method / Formula
- Statement:
    - **Form $0/0$:** Factor the numerator and denominator, cancel the common factor causing the zero, and then evaluate the limit by substitution.
    - **Form $0/0$ with Radicals:** Multiply the numerator and denominator by the conjugate of the radical expression. This often rationalizes the expression and allows for cancellation.
    - **Form $\infty/\infty$:** Divide the numerator and denominator by the highest power of the variable present in the denominator. This will create terms that approach 0.
    - **Form $\infty - \infty$:** Combine the terms into a single fraction using common denominators, effectively turning it into a $0/0$ or $\infty/\infty$ form.
- Conditions / scope: These methods are primarily for algebraic functions. Transcendental functions (like exponential or trigonometric) often require the Squeeze Theorem or L'Hôpital's Rule (Chapter 4).

### 4. Methods and Techniques
The primary strategy for these problems is a two-step process:
1.  **Transform Algebraically:** Use algebraic manipulation (factoring, multiplying by conjugates, or combining fractions) to simplify the original expression into one that is defined and continuous at $x = c$.
2.  **Evaluate using Continuity:** Once the expression is simplified and known to be continuous at $c$, apply the **Substitution Method** (from Section 2.4) to find the limit.

### 5. Common Pitfalls
- ❌ **Mistake:** Interpreting an indeterminate form like $0/0$ as being equal to $0$ or $1$.
    - ✅ **Correct Understanding:** Indeterminate means "cannot be determined." $0/0$ can evaluate to a finite number (like $2$, $6$), it can be infinite ($\infty$), or it can not exist at all. The form is a warning sign, not an answer.
- ❌ **Mistake:** Stopping after obtaining $a/0$ (where $a \neq 0$) and thinking the limit is $0$ or indeterminate.
    - ✅ **Correct Understanding:** A non-zero number over zero means the function grows without bound, so the limit does not exist (often infinite). We can characterize it as $\lim_{x \to c} f(x) = \pm \infty$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT strongly clarifies the terms "undefined", "does not exist", and "indeterminate". "Undefined" is a property of a mathematical expression. "Does not exist" is a description of a limit's behavior. "Indeterminate" is a warning about a specific limit form that requires further investigation. A function can be undefined at $x=c$ but still have a limit there (like $0/0$ forms). A limit can "not exist" because it grows to $\infty$ or oscillates.

(b) **Visualization Suggestions:**
- **Component 1: Factor and Cancel Visualizer**
    - *What it shows:* A graph of a rational function with a hole at $x=c$ (e.g., $y = \frac{x^2-4}{x-2}$). The user can choose to display the simplified graph $y = x+2$ (which is continuous everywhere) overlaid on top of the original graph (which has a hole at $x=2$).
    - *Parameters:* Animation showing $x$ approaching 2.
    - *Observation:* The user can visually see that the limit of the original function equals the limit of the simplified function as the simplified continuous function fills the hole.

### 7. Concept Self-Check (original)
**Q1.** What is the limit $\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$?
- Answer: $10$.
- Explanation: Factor the numerator to $(x-5)(x+5)$ and cancel the $(x-5)$ term. The limit becomes $\lim_{x \to 5} (x+5) = 10$.

**Q2.** What algebraic technique is often used to evaluate limits like $\lim_{x \to 9} \frac{\sqrt{x}-3}{x-9}$?
- Answer: Multiplying the numerator and denominator by the conjugate of the numerator ($\sqrt{x}+3$).
- Explanation: This rationalizes the numerator, creating a factor of $x-9$ in the denominator that can be canceled with the numerator's $x-9$ term.

**Q3.** Is the expression $\lim_{x \to 2} \frac{1}{x-2}$ indeterminate?
- Answer: No.
- Explanation: Direct substitution yields $\frac{1}{0}$, which is not an indeterminate form (it is a defined infinite form leading to the conclusion that the limit does not exist).

**Q4.** If you evaluate a limit and get the form $\infty - \infty$, how can you proceed?
- Answer: Combine the terms into a single rational expression over a common denominator.
- Explanation: Combining terms transforms the $\infty - \infty$ form into a $\frac{0}{0}$ or $\frac{\infty}{\infty}$ form, which can then be evaluated using factoring or division by highest powers.

**Q5.** What does the "Simplify and Substitute" method rely on for its validity?
- Answer: It relies on the fact that the simplified expression is continuous at the point of interest (allowing substitution) and that canceling terms that approach zero does not change the limit value (since we don't evaluate at $x=c$).
- Explanation: The original function might be undefined at $x=c$, but the simplified version is continuous there, allowing the laws of continuity to apply.

## 2.6 The Squeeze Trick and the Sine Limit

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Squeeze Theorem | A theorem stating that if a function $f(x)$ is bounded between two other functions with equal limits at a point, then $f(x)$ must also approach that limit. |
| Squeezed (at a point) | A description of a function $f(x)$ that lies between two functions $l(x)$ and $u(x)$ for all $x$ near $c$. |
| Trigonometric Limits | Special limits involving sine and cosine that are proven using the Squeeze Theorem. |

### 2. Why This Section Matters
This section provides the tools to evaluate limits of trigonometric functions, which cannot be evaluated with the algebraic methods of the previous section. The result $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ is crucial because it will be used directly in Chapter 3 to prove the derivative of the sine function.

### 3. Core Cards

**Card 1: The Squeeze Theorem**
- Type: Theorem
- Statement: If $f, l$, and $u$ are functions such that $l(x) \leq f(x) \leq u(x)$ for all $x$ in an open interval containing $c$ (except possibly at $c$ itself), and if $\lim_{x \to c} l(x) = \lim_{x \to c} u(x) = L$, then $\lim_{x \to c} f(x) = L$.
- Conditions / scope: Requires the function to be "trapped" or "squeezed" in an interval around $c$, and the boundary functions to converge to the same limit.
- Note: The Squeeze Theorem is also known as the Pinching Theorem or Sandwich Theorem.

**Card 2: Important Trigonometric Limits**
- Type: Theorem
- Statement:
    1.  $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ (where $\theta$ is measured in radians)
    2.  $\lim_{\theta \to 0} \frac{1 - \cos \theta}{\theta} = 0$
- Conditions / scope: Valid only when $\theta$ is measured in radians. In degrees, the first limit is $\pi/180$.
- Note: These limits are proven using the Squeeze Theorem and geometric arguments.

**Card 3: Bounding Inequality**
- Type: Theorem
- Statement: For $-\pi/2 < \theta < \pi/2$ and $\theta \neq 0$, the inequality $\cos \theta \leq \frac{\sin \theta}{\theta} \leq 1$ holds.
- Conditions / scope: This inequality is the key to proving $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$. Because $\lim_{\theta \to 0} \cos \theta = 1$, both functions bounding $\frac{\sin \theta}{\theta}$ have a limit of 1.
- Note: This result relies on the geometric fact that the area of a triangle is bounded by the area of a sector.

### 4. Methods and Techniques
- **Using the Squeeze Theorem:** To evaluate a limit $\lim_{x \to c} f(x)$:
    - Find functions $l(x)$ and $u(x)$ that bound $f(x)$ near $c$.
    - Show that $\lim_{x \to c} l(x) = L$ and $\lim_{x \to c} u(x) = L$.
    - Conclude $\lim_{x \to c} f(x) = L$.
- **Evaluating Trig Limits:** Manipulate the given expression algebraically so that it is expressed in terms of $\frac{\sin kx}{kx}$ where $k$ is a constant. Then, use the fact that $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$.

### 5. Common Pitfalls
- ❌ **Mistake:** Attempting to evaluate $\lim_{x \to 0} x \sin(1/x)$ using the Product Law.
    - ✅ **Correct Understanding:** The Product Law cannot be used here because $\lim_{x \to 0} \sin(1/x)$ does not exist. The Squeeze Theorem must be used by bounding $x \sin(1/x)$ between $-|x|$ and $|x|$.
- ❌ **Mistake:** Forgetting to measure angles in radians when calculating trig limits.
    - ✅ **Correct Understanding:** The limit $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ is only true for radians. If $\theta$ is in degrees, the limit is $\pi/180 \approx 0.01745$.
- ❌ **Mistake:** Misapplying the Squeeze Theorem by using bounds that do not actually trap $f(x)$ near $c$.
    - ✅ **Correct Understanding:** The inequality $l(x) \leq f(x) \leq u(x)$ must hold for *all* $x$ near $c$ (except possibly $c$ itself).

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The proof of the trig limit relies on comparing areas in a circle. As $\theta$ gets very small, the area of the triangle $OAB$ and the area of the sector $BOA$ become almost identical. This "squeezing" of areas implies that $\frac{\sin \theta}{\theta}$ is squeezed between $\cos \theta$ and $1$.

(b) **Visualization Suggestions:**
- **Component 1: Squeeze Theorem Visualizer**
    - *What it shows:* A graph containing three functions: $l(x)$ (lower bound), $u(x)$ (upper bound), and $f(x)$ (the function being squeezed) in between them.
    - *Parameters:* The point $c$ can be dragged, and the graph of $f(x)$ can be hidden to reveal it or shown to demonstrate it is trapped.
    - *Observation:* As $x$ approaches $c$, the upper and lower bounds merge at $L$, forcing the middle function $f(x)$ to converge to $L$ as well.
- **Component 2: The Sine Limit Geometric Proof**
    - *What it shows:* An interactive unit circle with a small angle $\theta$ drawn. The heights of specific triangles and the arc length of the sector are highlighted. The values of $\cos \theta$, $\sin \theta$, and $\theta$ are shown alongside their ratios.
    - *Parameters:* A slider to change the angle $\theta$, shrinking it towards 0.
    - *Observation:* As $\theta$ gets very small, the ratio $\frac{\sin \theta}{\theta}$ gets closer and closer to $1$, visualizing the fundamental trigonometric limit.

### 7. Concept Self-Check (original)
**Q1.** Evaluate $\lim_{x \to 0} \frac{\sin 2x}{x}$.
- Answer: $2$.
- Explanation: Multiply by $\frac{2}{2}$ to get $2 \lim_{x \to 0} \frac{\sin 2x}{2x} = 2 \cdot 1 = 2$.

**Q2.** If $x^2 \leq f(x) \leq 3x^2$ for all $x$ near $0$ (except at $0$), what is $\lim_{x \to 0} f(x)$?
- Answer: $0$.
- Explanation: Since $\lim_{x \to 0} x^2 = 0$ and $\lim_{x \to 0} 3x^2 = 0$, the Squeeze Theorem forces $\lim_{x \to 0} f(x)$ to also be 0.

**Q3.** True or False: The limit $\lim_{x \to 0} \frac{\sin x}{x}$ in degrees is 1.
- Answer: False.
- Explanation: The limit is only equal to 1 when $x$ is measured in radians. In degrees, the limit is $\pi/180 \approx 0.01745$.

**Q4.** Why can't you solve $\lim_{x \to 0} x \sin(1/x)$ by direct substitution?
- Answer: Because $\sin(1/x)$ is undefined at $x=0$, and the limit of $\sin(1/x)$ as $x \to 0$ does not exist.
- Explanation: Direct substitution would lead to an undefined expression and cannot be applied. The Squeeze Theorem is necessary to analyze the behavior of the product.

**Q5.** For the Squeeze Theorem to apply, what condition must the "upper" and "lower" squeezing functions satisfy?
- Answer: They must both converge to the same finite limit $L$ as $x \to c$.
- Explanation: Only if the two bounds have the same limit can the middle function be forced to also converge to that limit.

## 2.7 End Behavior: Limits at Infinity

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Limits at Infinity | The limit of $f(x)$ as $x$ increases without bound ($x \to \infty$) or decreases without bound ($x \to -\infty$). |
| Horizontal Asymptote | A horizontal line $y = L$ that the graph of $f(x)$ approaches as $x \to \infty$ or $x \to -\infty$. |
| End Behavior | The long-term trend of a function's values as the input grows infinitely large (positive or negative). |

### 2. Why This Section Matters
Limits at infinity are essential for understanding the "long-term" behavior of mathematical models. They are used to describe phenomena like the carrying capacity of a population or the horizontal asymptotes of a graph. This concept is vital for later topics in calculus, such as curve sketching and analyzing improper integrals.

### 3. Core Cards

**Card 1: Limits at Infinity**
- Type: Definition
- Statement:
    - $\lim_{x \to \infty} f(x) = L$ means $|f(x) - L|$ becomes arbitrarily small as $x$ increases without bound.
    - $\lim_{x \to -\infty} f(x) = L$ means $|f(x) - L|$ becomes arbitrarily small as $x$ decreases without bound (becomes more negative).
- Conditions / scope: The line $y = L$ is called a **horizontal asymptote** if either one-sided limit at infinity equals $L$.
- Note: A function can have 0, 1, or 2 horizontal asymptotes.

**Card 2: Power Functions at Infinity**
- Type: Theorem
- Statement:
    - $\lim_{x \to \infty} x^n = \infty$ and $\lim_{x \to \infty} x^{-n} = \lim_{x \to \infty} \frac{1}{x^n} = 0$ for any $n > 0$.
    - For $x \to -\infty$ and $n$ a positive whole number, $\lim_{x \to -\infty} x^n$ is $\infty$ if $n$ is even, and $-\infty$ if $n$ is odd. $\lim_{x \to -\infty} x^{-n} = 0$.
- Conditions / scope: These form the building blocks for analyzing the end behavior of more complex functions.

**Card 3: Limits at Infinity of a Rational Function**
- Type: Theorem
- Statement: For a rational function $f(x) = \frac{a_n x^n + \dots + a_0}{b_m x^m + \dots + b_0}$, the limit at infinity depends entirely on the leading terms.
    - If $n = m$: $\lim_{x \to \pm \infty} f(x) = \frac{a_n}{b_m}$
    - If $n < m$: $\lim_{x \to \pm \infty} f(x) = 0$
    - If $n > m$: $\lim_{x \to \pm \infty} f(x) = \pm \infty$ (the sign depends on the ratio of leading coefficients and the parity of $n-m$).
- Conditions / scope: $a_n \neq 0$ and $b_m \neq 0$.
- Note: This theorem allows the evaluation of limits of rational functions by inspection of the leading terms.

### 4. Methods and Techniques
- **Divide by Highest Power (Rational Functions):** To evaluate $\lim_{x \to \pm \infty} \frac{P(x)}{Q(x)}$, divide the numerator and denominator by the highest power of $x$ present in the denominator. Then, take the limit of each term. This turns powers of $x$ in the denominator into $1/x^k$ forms which approach 0.
- **Algebraic Manipulation for Radicals:** When dealing with limits of algebraic functions involving square roots, you might need to divide by the appropriate power of $x$ inside the radical, but be careful of signs (e.g., $\sqrt{x^2} = |x|$). For forms like $\infty - \infty$, you can multiply by the conjugate.
- **Inspect Leading Terms:** For rational functions, the end behavior is dictated only by the highest degree terms in the numerator and denominator.

### 5. Common Pitfalls
- ❌ **CAUTION:** Incorrectly handling roots in limits at infinity.
    - ✅ **Correct Understanding:** $\sqrt{x^2} = |x|$, not $x$. When taking $x \to -\infty$, you must account for the sign of $x$. For example, $\lim_{x \to -\infty} \frac{4x}{\sqrt{x^2+1}} = -4$ because the denominator behaves like $|x| = -x$.
- ❌ **Mistake:** Thinking that if a function has a horizontal asymptote, it never touches the line $y=L$.
    - ✅ **Correct Understanding:** A function can intersect its horizontal asymptote. For example, $f(x) = \frac{\sin x}{x}$ approaches $0$ as $x \to \infty$, but it oscillates above and below the line $y=0$ infinitely many times.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** Limits at infinity are the "end behavior" of the graph. Imagine walking to the right on the $x$-axis forever; the height of the graph $y=f(x)$ may eventually settle on a constant horizontal altitude (the horizontal asymptote), or it may shoot up towards the sky ($\infty$) or down towards the earth ($-\infty$). The logistic population model shows this as the "carrying capacity" of a system.

(b) **Visualization Suggestions:**
- **Component 1: Rational Function End Behavior Visualizer**
    - *What it shows:* A graph of a rational function. The user can adjust the coefficients of the leading terms of the numerator and denominator.
    - *Parameters:* Sliders to adjust the degree and leading coefficient of both the numerator and denominator.
    - *Observation:* The user can see the horizontal asymptote change based on the rule (e.g., $n=m$ gives a horizontal asymptote equal to the ratio of leading coefficients; $n < m$ gives a horizontal asymptote at $y=0$).
- **Component 2: Function Touching its Asymptote**
    - *What it shows:* A graph of $f(x) = \frac{\sin x}{x}$. The function oscillates with decreasing amplitude while converging to the horizontal asymptote $y=0$.
    - *Parameters:* A zoom-out functionality to observe the long-term behavior.
    - *Observation:* The user can visually confirm that a function can cross its horizontal asymptote infinitely many times while still converging to it.

### 7. Concept Self-Check (original)
**Q1.** What is $\lim_{x \to \infty} \frac{4x^2 + 3x - 1}{2x^2 + 5}$?
- Answer: $2$.
- Explanation: Divide numerator and denominator by $x^2$. The higher degree terms become 0, leaving $\frac{4}{2} = 2$.

**Q2.** Does the function $f(x) = e^{-x}$ have a horizontal asymptote as $x \to \infty$?
- Answer: Yes, $y = 0$.
- Explanation: As $x$ grows, $e^{-x} = \frac{1}{e^x}$ approaches $0$, making $y=0$ a horizontal asymptote.

**Q3.** True or False: A function can have at most two horizontal asymptotes.
- Answer: True.
- Explanation: A function can have one horizontal asymptote as $x \to \infty$ and one as $x \to -\infty$, giving a maximum of two.

**Q4.** If $\lim_{x \to \infty} f(x) = 5$, what does the graph of $f$ look like as $x$ gets very large?
- Answer: It gets closer and closer to the horizontal line $y = 5$.
- Explanation: The horizontal line $y = 5$ is a horizontal asymptote of the function.

**Q5.** Explain how to determine the limit at infinity for a rational function where the degree of the numerator is less than the degree of the denominator.
- Answer: The limit is 0.
- Explanation: The denominator grows much faster than the numerator, causing the ratio to shrink to zero.

## 2.8 No Jumping Over Values: The Intermediate Value Theorem

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Intermediate Value Theorem (IVT) | A theorem stating that a continuous function on a closed interval takes on every value between its endpoints. |
| Zero/Root | A value $c$ such that $f(c) = 0$. |
| Bisection Method | A numerical method for finding a root by repeatedly halving an interval where the function has opposite signs. |

### 2. Why This Section Matters
This theorem is a foundational existence theorem. While we usually want to find exact solutions to equations, the IVT tells us that a solution *must exist* without needing to solve it explicitly. It is used in numerical analysis (like the Bisection Method) and in higher mathematics to establish properties of continuous functions. It also has real-world applications, such as proving that two opposing points on a map have the same temperature.

### 3. Core Cards

**Card 1: Intermediate Value Theorem (IVT)**
- Type: Theorem
- Statement: If $f$ is continuous on a closed interval $[a, b]$, and $M$ is any number strictly between $f(a)$ and $f(b)$, then there exists at least one value $c \in (a, b)$ such that $f(c) = M$.
- Conditions / scope: Requires $f$ to be continuous on the closed interval $[a,b]$.
- Note: Graphically, the theorem states that any horizontal line intersecting the $y$-axis between $f(a)$ and $f(b)$ must cross the graph of $f$ at least once.

**Card 2: Existence of Zeros**
- Type: Corollary
- Statement: If $f$ is continuous on a closed interval $[a, b]$, and if $f(a)$ and $f(b)$ have opposite signs (one is strictly positive, the other strictly negative), then $f$ has at least one zero (root) in the interval $[a, b]$.
- Conditions / scope: Requires continuity and opposite signs at the endpoints.
- Note: This is the direct application of the IVT where $M = 0$. It is the basis for the Bisection Method.

**Card 3: Bisection Method**
- Type: Method
- Statement: A numerical root-finding method for a continuous function $f$ on an interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs.
    1.  Compute the midpoint $m = \frac{a+b}{2}$.
    2.  Evaluate $f(m)$.
    3.  Determine which subinterval $[a, m]$ or $[m, b]$ contains a root by checking for a sign change.
    4.  Repeat the process with the new interval to narrow down the location of the root.
- Conditions / scope: Only guarantees finding an interval containing a root, not the exact root itself.

### 4. Methods and Techniques
- **Using the IVT:** To show an equation $f(x) = M$ has a solution in $[a, b]$:
    - Show $f$ is continuous on $[a, b]$.
    - Compute $f(a)$ and $f(b)$.
    - Show $M$ lies between $f(a)$ and $f(b)$.
- **Proving the Existence of Zeros:** Show that $f$ is continuous on $[a, b]$ and that $f(a)$ and $f(b)$ have opposite signs.
- **Using the Bisection Method:** Systematically narrow the interval $[a, b]$ by halving it and testing which half retains the sign change.

### 5. Common Pitfalls
- ❌ **Mistake:** Applying the IVT to a function that is not continuous.
    - ✅ **Correct Understanding:** The IVT is only guaranteed for continuous functions. A jump discontinuity could allow the function to "skip over" the value $M$.
- ❌ **Mistake:** Assuming the IVT implies that the root is unique.
    - ✅ **Correct Understanding:** The IVT only guarantees the existence of *at least one* root. The function may cross the $x$-axis multiple times within the same interval.
- ❌ **Mistake:** Assuming if $f(a)$ and $f(b)$ have the same sign, there is no root.
    - ✅ **Correct Understanding:** The function could cross the $x$-axis twice (or any even number of times) between $a$ and $b$, returning to the same sign.
- ❌ **Mistake:** Thinking the Bisection Method requires determining the *exact* root.
    - ✅ **Correct Understanding:** The Bisection Method provides a sequence of smaller and smaller intervals that are guaranteed to contain a root. The exact root can be approximated to any degree of accuracy using this method.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT points out that the theorem, while seemingly obvious, relies on a subtle property of the real number line (its completeness). A continuous function on a continuous domain $[a,b]$ cannot "skip" values. In the physical world, imagine a plane taking off from 0 to 10,000 feet. Since the motion is continuous, the plane must at some instant be at exactly 8,371 feet.

(b) **Visualization Suggestions:**
- **Component 1: The IVT Visualizer**
    - *What it shows:* A continuous function defined on $[a, b]$. A horizontal line is drawn at height $M$ between $f(a)$ and $f(b)$. The intersection points of this line and the function are highlighted.
    - *Parameters:* Drag the endpoints $a$ or $b$ (or the value of $M$).
    - *Observation:* No matter how you change the function or the interval, as long as $M$ is between $f(a)$ and $f(b)$, the graph always crosses the horizontal line at least once.
- **Component 2: Bisection Method Step-by-Step**
    - *What it shows:* A function on an interval where a sign change occurs. The user can step through the bisection process one iteration at a time.
    - *Parameters:* Buttons to "Step Forward" and "Step Backward" through the iterative halving process.
    - *Observation:* The interval containing the root gets progressively smaller, demonstrating the convergence of the method.

### 7. Concept Self-Check (original)
**Q1.** Does the function $f(x) = x^3$ have a root in the interval $[-1, 1]$?
- Answer: Yes.
- Explanation: $f(x)$ is continuous. $f(-1) = -1$ and $f(1) = 1$ have opposite signs. Therefore, by the Existence of Zeros corollary, there must be a root in $[-1, 1]$.

**Q2.** If $f(x)$ is continuous, and $f(2) = 5$ and $f(5) = -1$, what does the IVT guarantee?
- Answer: It guarantees that $f(c) = 0$ for at least one $c$ in $(2, 5)$.
- Explanation: Since 0 lies between 5 and -1, the IVT guarantees $f$ takes on the value 0 somewhere in the interval.

**Q3.** If $g(0) = 2$ and $g(2) = 2$, and $g$ is continuous, does the IVT guarantee a root in $[0, 2]$?
- Answer: No.
- Explanation: Since $g(0)$ and $g(2)$ do not have opposite signs (both are positive), the IVT does not guarantee a root. $g$ might never cross the x-axis in that interval.

**Q4.** In the Bisection Method, what do you know after the first step if $f(a)$ and $f(b)$ have opposite signs?
- Answer: You know the root lies in the half of the interval where $f(a)$ and $f(m)$ (where $m$ is the midpoint) have opposite signs.
- Explanation: The sign change between $a$ and the midpoint (or midpoint and $b$) tells you where the root is located.

**Q5.** True or False: The IVT applies only if $f(a)$ and $f(b)$ have opposite signs.
- Answer: False.
- Explanation: The IVT states that if $M$ is *any* number between $f(a)$ and $f(b)$, it must exist. Setting $M=0$ when the signs are opposite is just a specific, useful application.

## 2.9 Making "Approaches" Precise: The ε–δ Definition

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| $\epsilon-\delta$ Definition | The rigorous mathematical definition of a limit using the Greek letters $\epsilon$ (epsilon) for the error tolerance and $\delta$ (delta) for the proximity requirement. |
| Gap | The distance between the function value $f(x)$ and the limit $L$, denoted as $|f(x) - L|$. |
| Epsilon ($\epsilon$) | An arbitrarily small positive number representing the maximum allowed error between $f(x)$ and $L$. |
| Delta ($\delta$) | A positive number representing the maximum allowed distance from $x$ to $c$ to achieve the error tolerance. |

### 2. Why This Section Matters
The formal definition provides the rigorous, logical foundation for the entire concept of the limit. Without it, calculus is built on an intuitive, but mathematically ambiguous, definition. This epsilon-delta framework is required for rigorous proofs of the limit laws, the Squeeze Theorem, and for establishing limits of complex functions. It is essential for advanced calculus and analysis.

### 3. Core Cards

**Card 1: Formal Definition of a Limit ($\epsilon-\delta$)**
- Type: Definition
- Statement: We say that $\lim_{x \to c} f(x) = L$ if for every number $\epsilon > 0$, there exists a number $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.
- Conditions / scope: $f(x)$ must be defined on some open interval containing $c$, though it may not be defined at $c$ itself.
- Note: This definition formalizes the idea that the "gap" $|f(x)-L|$ can be made as small as desired ($\epsilon$) by taking $x$ sufficiently close to $c$ ($\delta$).

### 4. Methods and Techniques
- **Proving a Limit using the $\epsilon-\delta$ Definition:**
    1.  **Relate the gap to $|x-c|$:** Analyze $|f(x) - L|$ and express it in terms of $|x - c|$. Often, this involves using algebraic factorization or inequalities (e.g., $f(x) = x^2 \implies |x^2 - c^2| = |x-c|\cdot|x+c|$).
    2.  **Bound the non-constant factor:** Assume a bound for $\delta$ (e.g., $\delta \le 1$) to define a neighborhood around $c$. Find an upper bound for any multiplied terms (e.g., if $x \in (c-1, c+1)$, then $|x+c| = |(x-c)+2c| \le |x-c| + 2|c| < 2|c|+1$).
    3.  **Choose $\delta$ in terms of $\epsilon$:** Use the relationships found in the previous steps to define a $\delta$. For instance, if $|f(x)-L| \le K|x-c|$, then choosing $\delta = \min\{1, \frac{\epsilon}{K}\}$ guarantees the proof works.
    4.  **Conclude:** State that for any given $\epsilon > 0$, the chosen $\delta > 0$ satisfies the formal definition, thereby proving the limit.

### 5. Common Pitfalls
- ❌ **Mistake:** Confusing the roles of $\epsilon$ and $\delta$. Thinking $\epsilon$ and $\delta$ are variables you solve for.
    - ✅ **Correct Understanding:** $\epsilon$ is an arbitrary positive number you are given as a "tolerance" or "challenge". $\delta$ is a positive number you must *choose* or *find* that satisfies the condition. The relationship is "You give me an $\epsilon$, I can give you a $\delta$".
- ❌ **Mistake:** Only proving the limit for one specific $\epsilon$.
    - ✅ **Correct Understanding:** The formal definition requires the statement "if $|x-c| < \delta$, then $|f(x)-L| < \epsilon$" to hold *for all* $\epsilon > 0$. You must prove it for an arbitrary $\epsilon$.
- ❌ **Mistake:** Setting $\delta = \epsilon$ when it's not valid.
    - ✅ **Correct Understanding:** $\delta$ is a function of $\epsilon$ (e.g., $\delta = \epsilon/8$ for a linear function, or $\delta = \min\{1, \epsilon/5\}$ for a quadratic). It is rarely a simple equality.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT can be framed as a game of tolerance. The challenger gives you a tiny error tolerance $\epsilon$ (the height of a band around $y=L$). You must respond by finding a proximity interval $\delta$ (the width of a band around $x=c$) such that every $x$ within that interval lands inside the tolerance band. If you can do this for *any* $\epsilon$ the challenger throws at you, the limit is proven.
(b) **Visualization Suggestions:**
- **Component 1: Epsilon-Delta Visualizer**
    - *What it shows:* A graph of a function $f(x)$ with a point $c$ marked. Two horizontal dashed lines are drawn at $y = L - \epsilon$ and $y = L + \epsilon$. Two vertical dashed lines are drawn at $x = c - \delta$ and $x = c + \delta$. The rectangle bounded by these lines shows the region where the condition must be met.
    - *Parameters:* Sliders to control $\epsilon$ and the corresponding $\delta$.
    - *Observation:* As you decrease $\epsilon$, you can see the required $\delta$ getting smaller to keep the graph within the rectangle. This visualizes "for every $\epsilon$, there exists a $\delta$".
- **Component 2: Gap vs Distance Visualizer**
    - *What it shows:* Two graphs side-by-side. One shows the distance $|x-c|$ shrinking to 0, and the other shows the gap $|f(x)-L|$ shrinking to 0.
    - *Parameters:* A slider to animate $x$ moving towards $c$.
    - *Observation:* The visualization demonstrates that as the input approaches $c$, the output $f(x)$ approaches $L$, with the gap becoming arbitrarily small.

### 7. Concept Self-Check (original)
**Q1.** In the formal definition, $\lim_{x \to c} f(x) = L$, what do $\epsilon$ and $\delta$ represent?
- Answer: $\epsilon$ is the maximum allowed error in the output $|f(x)-L|$. $\delta$ is the maximum allowed distance $|x-c|$ to guarantee that the output error is less than $\epsilon$.
- Explanation: $\epsilon$ sets the constraint on the $y$-axis (output), and $\delta$ dictates the region on the $x$-axis (input) to meet that constraint.

**Q2.** True or False: The requirement "there exists $\delta > 0$" means that for any $\epsilon$, you must find a *single specific* $\delta$, and only one $\delta$ can work.
- Answer: False.
- Explanation: You must find *at least one* $\delta$, but usually any smaller $\delta$ will also work. The proof just needs to demonstrate that at least one such $\delta$ exists.

**Q3.** If the formal definition states $0 < |x-c| < \delta$, why is $0 <$ included?
- Answer: This condition explicitly excludes the point $x = c$, reinforcing that the limit depends entirely on values near $c$, not at $c$.
- Explanation: The function may be undefined at $c$, or its value at $c$ may be different from the limit. The limit examines behavior *approaching* $c$ from both sides.

**Q4.** To prove $\lim_{x \to c} f(x) = L$ for a linear function $f(x) = 5x + 2$, the gap is $|5x+2 - (5c+2)| = 5|x-c|$. If you need the gap to be less than $\epsilon$, how must you choose $\delta$?
- Answer: $\delta = \frac{\epsilon}{5}$.
- Explanation: Since $\text{gap} \le 5|x-c|$, setting $|x-c| < \frac{\epsilon}{5}$ ensures the gap is less than $\epsilon$.

**Q5.** What is the graphical interpretation of the $\epsilon-\delta$ definition?
- Answer: Given a horizontal strip of width $2\epsilon$ around $y=L$, we can find a vertical strip of width $2\delta$ around $x=c$ such that the graph of the function stays entirely inside the resulting $2\delta$ by $2\epsilon$ rectangle (except possibly at $x=c$).
- Explanation: This visualizes the containment of the function's values within a tolerance band when the input is within a certain proximity.

---
## Part 3: Chapter Quick-Reference Sheet

## Chapter 2 Quick Reference

### 2.1 Why Limits? Speed and Steepness
- **Average Velocity:** $\text{Average Velocity} = \frac{s(t_1) - s(t_0)}{t_1 - t_0} = \text{Slope of Secant Line}$.
- **Instantaneous Velocity:** $\lim_{\Delta t \to 0} \frac{s(t + \Delta t) - s(t)}{\Delta t} = \text{Slope of Tangent Line}$.
- **Secant/Tangent Relationship:** The limit of secant line slopes is the slope of the tangent line.

### 2.2 Estimating Limits from Tables and Graphs
- **Definition:** $\lim_{x \to c} f(x) = L$ means $|f(x)-L|$ is arbitrarily small for $x$ sufficiently close to $c$. The limit exists iff left- and right-hand limits exist and are equal: $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x) = L$.
- **Infinite Limits:** $\lim_{x \to c} f(x) = \pm\infty$ describes unbounded behavior (the limit does not exist). $x=c$ is a vertical asymptote.
- **Numerical Investigation:** Use tables to find patterns, but be aware of oscillating functions that might mislead.

### 2.3 Rules for Computing Limits
- **Sum, Difference, Constant Multiple, Product Laws:** Applied if individual limits exist.
- **Quotient Law:** $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$ if $\lim_{x \to c} g(x) \neq 0$.
- **Power/Root Laws:** $\lim_{x \to c} [f(x)]^{p/q} = \left( \lim_{x \to c} f(x) \right)^{p/q}$ (with restrictions for even roots).
- **Simple Limits:** $\lim_{x \to c} k = k$, $\lim_{x \to c} x = c$.

### 2.4 Continuity: Graphs Without Breaks
- **Continuity Conditions (at $c$):** $f(c)$ defined, $\lim_{x \to c} f(x)$ exists, and they are equal.
- **Discontinuity Types:** Removable (hole, limit exists), Jump (left/right limits differ), Infinite (vertical asymptote).
- **One-Sided Continuity:** Left-continuous ($\lim_{x \to c^{-}} f(x) = f(c)$), Right-continuous ($\lim_{x \to c^{+}} f(x) = f(c)$).
- **Building Continuous Functions:** Sums, products, quotients (where denominator $\neq 0$), and compositions of continuous functions are continuous. Basic functions (polynomials, rationals, trig, exponential, log) are continuous on their domains.
- **Substitution Method:** If $f$ is continuous at $c$, $\lim_{x \to c} f(x) = f(c)$.

### 2.5 Resolving 0/0: Indeterminate Forms
- **Indeterminate Types:** $\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty \cdot 0$, $\infty - \infty$. These indicate further work is needed.
- **Strategies:**
    - $0/0$: Factor and cancel common terms, or multiply by a conjugate (for radicals).
    - $\infty/\infty$: Divide numerator and denominator by the highest power of $x$ in the denominator.
    - $\infty - \infty$: Combine terms into a single fraction over a common denominator.

### 2.6 The Squeeze Trick and the Sine Limit
- **Squeeze Theorem:** If $l(x) \le f(x) \le u(x)$ near $c$ and $\lim_{x \to c} l(x) = \lim_{x \to c} u(x) = L$, then $\lim_{x \to c} f(x) = L$.
- **Trigonometric Limits (Radians):** $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$, $\lim_{\theta \to 0} \frac{1 - \cos \theta}{\theta} = 0$.
- **Generalization:** $\lim_{\theta \to 0} \frac{\sin(k\theta)}{k\theta} = 1$ for any constant $k \neq 0$.

### 2.7 End Behavior: Limits at Infinity
- **Definition:** $\lim_{x \to \pm\infty} f(x) = L$ means $L$ is a horizontal asymptote.
- **Rational Functions:** $\lim_{x \to \pm\infty} \frac{a_n x^n + \dots + a_0}{b_m x^m + \dots + b_0} = \begin{cases} \frac{a_n}{b_m} & \text{if } n = m \\ 0 & \text{if } n < m \\ \pm\infty & \text{if } n > m \end{cases}$
- **Power Functions:** $x^n \to \infty$ as $x \to \infty$; $x^{-n} \to 0$ as $x \to \infty$. For $x \to -\infty$, even powers go to $\infty$, odd powers to $-\infty$.

### 2.8 No Jumping Over Values: The Intermediate Value Theorem
- **IVT:** If $f$ is continuous on $[a,b]$, then for any $M$ between $f(a)$ and $f(b)$, there is at least one $c \in (a,b)$ such that $f(c) = M$.
- **Existence of Zeros:** If $f(a)$ and $f(b)$ have opposite signs, then $f(c) = 0$ for some $c \in (a,b)$.
- **Bisection Method:** Iteratively halve an interval with a sign change to locate a root.

### 2.9 Making "Approaches" Precise: The ε–δ Definition
- **Epsilon-Delta Definition:** $\lim_{x \to c} f(x) = L$ if for all $\epsilon > 0$, there exists $\delta > 0$ such that $0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$.
- **Method:** To prove, express $|f(x)-L|$ in terms of $|x-c|$, choose $\delta$ based on $\epsilon$ (often involving a min function), and verify the implication.
