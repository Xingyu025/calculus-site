# Chapter 1: Precalculus Review

## Sections in This Chapter
- 1.1 Real Numbers, Functions, and Graphs
- 1.2 Linear and Quadratic Functions
- 1.3 The Basic Classes of Functions
- 1.4 Trigonometric Functions
- 1.5 Inverse Functions
- 1.6 Exponential and Logarithmic Functions
- 1.7 Technology: Calculators and Computers

## Knowledge Dependencies
- 1.1 Real Numbers & Interval Notation → Used throughout all of calculus for domain, range, and continuity arguments; used in Chapter 2 (Limits).
- 1.1 Functions and Graphs, 1.2 Linear/Quadratic Functions → Foundation for limits, derivatives, and curve sketching in Chapters 2–4.
- 1.3 Basic Classes of Functions → Classification of functions encountered in differential and integral calculus (e.g., power rule, integration rules).
- 1.4 Trigonometric Functions → Essential for modeling periodic phenomena, deriving trig derivatives in Chapter 3, and evaluating definite integrals in Chapter 5.
- 1.5 Inverse Functions → Necessary to understand logarithms, inverse trig functions, and techniques like u-substitution in integration later on.
- 1.6 Exponential & Logarithmic Functions → Central to exponential growth/decay models, solving differential equations, and logarithmic differentiation techniques.
- 1.7 Technology → Conceptual groundwork for numerical methods, root-finding algorithms, and visually understanding limits (Chapter 2).

---

## Part 2: Section-by-Section Content

## 1.1 Real Numbers, Functions, and Graphs

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Real number | A number that can be represented by a finite, infinite repeating, or infinite non-repeating decimal. |
| Rational number | A number expressible as a fraction $p/q$ where $p$ and $q$ are integers and $q \neq 0$. |
| Irrational number | A real number that cannot be expressed as a fraction of integers; its decimal expansion is infinite and non-repeating. |
| Absolute value | The distance of a number from 0 on the real number line, always non-negative. |
| Interval | A set of real numbers between two endpoints, which may or may not be included. |
| Domain | The set of allowable input values for a function. |
| Range | The set of all output values produced by a function. |
| Even function | A function where $f(-x) = f(x)$ for all $x$; its graph is symmetric about the $y$-axis. |
| Odd function | A function where $f(-x) = -f(x)$ for all $x$; its graph is symmetric about the origin. |
| Translation (Shift) | Moving a graph horizontally or vertically without changing its shape. |
| Scaling (Dilation) | Expanding or compressing a graph horizontally or vertically. |

### 2. Why This Section Matters
Calculus treats mathematical relationships as continuous flows of change. This section establishes the foundational language—sets, intervals, functions, and graphs—that you will use to describe those relationships. Understanding the properties of the real number line and how functions behave (e.g., increasing/decreasing, even/odd) is essential for evaluating limits (Chapter 2) and derivatives (Chapter 3). The geometric transformations discussed here will later help you visualize how differential equations modify physical systems.

### 3. Core Cards

**Card 1: Properties of Exponents**
- Type: Formula
- Statement: For any real base $b > 0$ and real exponents $x$ and $y$:
  (0) **Zero exponent:** $b^0 = 1$
  (i) **Product of powers:** $b^x b^y = b^{x+y}$
  (ii) **Quotient of powers:** $\frac{b^x}{b^y} = b^{x-y}$
  (iii) **Negative exponents:** $b^{-x} = \frac{1}{b^x}$
  (iv) **Power of a power:** $(b^x)^y = b^{xy}$
  (v) **Roots:** $b^{1/n} = \sqrt[n]{b}$
- Conditions / scope: $b > 0$.
- Note: These are the fundamental algebraic tools for manipulating exponential expressions, which appear frequently in all later calculus topics.

**Card 2: Binomial Expansion Formula**
- Type: Formula
- Statement: The expansion of $(a+b)^n$ for a positive integer $n$ is given by:
  $$
(a+b)^n = \sum_{p=0}^{n} \frac{n!}{(n-p)!p!} a^{n-p} b^p
$$
  where $n! = n(n-1)(n-2)\cdots(2)(1)$ and by convention, $0! = 1$.
- Conditions / scope: $n$ is a non-negative integer.
- Note: This formula is proven via induction (Appendix C) and is used to derive the power rule for derivatives in Section 3.2.

**Card 3: Definition of Absolute Value**
- Type: Definition
- Statement: The absolute value of a real number $a$ is its distance from 0 on the real number line. It is defined as:
  $$
|a| = \begin{cases} a & \text{if } a \ge 0 \\ -a & \text{if } a < 0 \end{cases}
$$
- Conditions / scope: $a \in \mathbb{R}$.
- Note: Note the explicit handling of $a < 0$ to ensure the output is always non-negative.

**Card 4: Triangle Inequality**
- Type: Formula / Theorem
- Statement: For any real numbers $a$ and $b$, the absolute value of their sum is at most the sum of their absolute values:
  $$
|a+b| \le |a| + |b|
$$
- Conditions / scope: $a, b \in \mathbb{R}$.
- Note: Equality holds only when $a$ and $b$ have the same sign or one is zero. This inequality is frequently used to bound errors in numerical approximation methods in later calculus.

**Card 5: Distance on the Real Line**
- Type: Formula
- Statement: The distance between two real numbers $a$ and $b$ on the real number line is given by the absolute value of their difference:
  $$
\text{Distance} = |b-a|
$$
- Conditions / scope: $a, b \in \mathbb{R}$.
- Note: If the decimals of $a$ and $b$ agree to $k$ places, then $|b-a| \le 10^{-k}$.

**Card 6: Intervals and Absolute-Value Inequalities**
- Type: Formula
- Statement: A symmetric open interval centered at $c$ with radius $r$ is described as:
  $$
|x-c| < r \iff c-r < x < c+r \iff x \in (c-r, c+r)
$$
  Similarly, a symmetric closed interval is given by:
  $$
|x-c| \le r \iff c-r \le x \le c+r \iff x \in [c-r, c+r]
$$
- Conditions / scope: $c \in \mathbb{R}, r > 0$.
- Note: This provides a powerful, compact way to express boundaries in domains and ranges, a skill used in limit proofs later.

**Card 7: Distance Formula in the Plane**
- Type: Formula
- Statement: The distance $d$ between two points $P_1 = (x_1,y_1)$ and $P_2 = (x_2,y_2)$ in the Cartesian plane is given by the Pythagorean Theorem:
  $$
d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$
- Conditions / scope: Two points on the plane.
- Note: This foundational formula is the direct antecedent to the equation of a circle.

**Card 8: Standard Equation of a Circle**
- Type: Formula
- Statement: The equation of a circle of radius $r$ centered at $(a,b)$ is:
  $$
(x-a)^2 + (y-b)^2 = r^2
$$
- Conditions / scope: $r > 0$.
- Note: You can identify the center and radius by completing the square on the $x$ and $y$ terms.

**Card 9: Definition of a Function**
- Type: Definition
- Statement: A function $f$ from a set $D$ (domain) to a set $Y$ is a rule that assigns to each element $x \in D$ a unique element $f(x) \in Y$. We write $f: D \to Y$. The **range** is the subset of $Y$ containing all possible values $f(x)$ for $x \in D$.
- Conditions / scope: For each input, there is exactly one output.
- Note: Informally, think of it as a machine that takes an input $x$ and produces a unique output $f(x)$.

**Card 10: Vertical Line Test**
- Type: Definition / Test
- Statement: A curve in the $xy$-plane is the graph of a function $y = f(x)$ if and only if every vertical line $x = a$ intersects the curve in at most one point.
- Conditions / scope: Applies to curves in a 2D plane.
- Note: This test separates graphs of functions from graphs of equations (e.g., a circle fails this test because vertical lines intersect it twice).

**Card 11: Even and Odd Functions (Symmetry)**
- Type: Definition
- Statement:
  - **Even Function:** A function $f$ is even if $f(-x) = f(x)$ for all $x$ in its domain. Its graph is symmetric about the $y$-axis.
  - **Odd Function:** A function $f$ is odd if $f(-x) = -f(x)$ for all $x$ in its domain. Its graph is symmetric about the origin.
- Conditions / scope: The domain must be symmetric about the origin (i.e., for every $x$ in the domain, $-x$ is also in the domain).
- Note: Many physical systems possess these symmetries, which can reduce the amount of work required to analyze them via integration.

**Card 12: Function Transformations (Translations and Scalings)**
- Type: Definition
- Statement: Let $y = f(x)$ be a function, and $c, k$ be constants. The following transformations apply:
  - **Vertical Translation:** $y = f(x) + c$ shifts the graph up if $c > 0$ and down if $c < 0$.
  - **Horizontal Translation:** $y = f(x+c)$ shifts the graph left if $c > 0$ and right if $c < 0$.
  - **Vertical Scaling:** $y = kf(x)$ stretches vertically if $|k| > 1$, compresses vertically if $0 < |k| < 1$, and reflects across the $x$-axis if $k < 0$.
  - **Horizontal Scaling:** $y = f(kx)$ compresses horizontally if $|k| > 1$, stretches horizontally if $0 < |k| < 1$, and reflects across the $y$-axis if $k < 0$.
- Conditions / scope: $k \neq 0$. $c$ is any real number.
- Note: Be careful with horizontal scaling/translation; they often behave opposite to what intuition suggests (e.g., $f(x+c)$ moves left, $f(kx)$ compresses).

### 4. Methods and Techniques
- **Finding the Domain of a Function Defined by a Formula:** Identify the set of inputs $x$ for which the expression yields a real number. For square roots $\sqrt{g(x)}$, require $g(x) \ge 0$. For rational expressions $\frac{p(x)}{q(x)}$, require $q(x) \neq 0$.
- **Sketching Graphs Using Symmetry and Transformations:** Start with a base graph $y = f(x)$. Apply transformations systematically: first horizontal scaling, then horizontal translation, then vertical scaling, and finally vertical translation (simplified mnemonic: "H.S. then H.T. then V.S. then V.T.", though the exact order can affect the intermediate reference points).
- **Using a Table of Values to Sketch a Graph:** Select a set of $x$-values, calculate the corresponding $y = f(x)$, plot the points $(x, f(x))$, and connect them with a smooth curve. Identify roots ($x$-intercepts) where $f(x)=0$ to help guide the sketch.
- **Analyzing Monotonicity:** To determine if a function is increasing or decreasing on an interval $(a,b)$, pick two points $x_1 < x_2$ in that interval and check whether $f(x_1) < f(x_2)$ (increasing) or $f(x_1) > f(x_2)$ (decreasing).

### 5. Common Pitfalls
- **❌ Confusing $f(x+c)$ with $f(x)+c$:** Many students think "plus c" moves the graph right when inside the function. Remember that $f(x+c)$ shifts horizontally opposite the sign of $c$, while $f(x)+c$ shifts vertically in the direction of the sign of $c$.
- **❌ Misunderstanding Absolute Value Equality:** Assuming $|a| = a$ is always true. Correct understanding: $|a| = a$ only when $a \ge 0$. If $a < 0$, $|a| = -a$.
- **❌ Thinking $|a+b| = |a| + |b|$ is always true.** This is false (the Triangle Inequality states it’s *at most* that). If $a$ and $b$ have opposite signs, $|a+b| < |a| + |b|$ due to cancellation in the sum.
- **❌ Ignoring the uniqueness of decimal expansion for rational numbers:** Thinking $0.5$ is uniquely $0.5$ and not equivalent to $0.49999\ldots$. Rational numbers have a finite decimal expansion that can also be represented by an infinite repeating 9.
- **❌ Assuming the notation $(a, b)$ always means the same thing.** Depending on context, $(a, b)$ may denote the open interval $\{x : a < x < b\}$ or the point with coordinates $x = a$, $y = b$ in the plane. Read the context to decide which meaning applies.
- **❌ Applying the Vertical Line Test to the graph of an equation like $x = y^2$.** This graph is a sideways parabola and fails the vertical line test because for a given $x$, there are two possible $y$ values. This means $x$ is not a function of $y$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The **CONCEPTUAL INSIGHT** of functions as "machines" is fundamental: an input $x$ goes into the machine, undergoes a defined operation, and produces an output $f(x)$. This highlights the uniqueness requirement (a single machine cannot produce two outputs for the same input). The concept of range can be visualized as the collection of all outputs that have actually been produced by the machine.

(b) **Visualization suggestions:**
- **Concept:** Symmetry (Even vs Odd functions).
  - **Component:** Interactive Graph Symmetry Tool.
  - **Parameters:** User drags a point $(a, b)$ along a plotted function. The tool automatically shows its mirror image across the $y$-axis $(−a, b)$ and the origin $(−a, −b)$. The user can toggle the function between predefined even ($x^2$), odd ($x^3$), and neither ($x^2+x$) functions.
  - **Observation Expected:** The user identifies the relationship between $f(a)$ and $f(-a)$ to classify the function's parity.
- **Concept:** Function Transformations (Translations/Scaling).
  - **Component:** Interactive Graph Transformer.
  - **Parameters:** Base function $y=f(x)$ (e.g., $x^2$, $\sin x$, $|x|$). Four sliders: Vertical Shift $c$, Horizontal Shift $d$, Vertical Scale $a$, Horizontal Scale $b$. The equation updates live to $y = a f(b(x+d)) + c$.
  - **Observation Expected:** User sees how vertical parameters affect the $y$-axis, and horizontal parameters affect the $x$-axis, noting that "inside" changes go opposite to the direction of movement (e.g., increasing $d$ moves left).

### 7. Concept Self-Check (original)
**Q1.** A function can be defined graphically as any curve that can be drawn on a piece of paper without lifting your pen.
- Answer: False.
- Explanation: A function must pass the Vertical Line Test; a wavy, continuous curve can still fail the test if a vertical line intersects it twice.

**Q2.** If $f(x)$ is an odd function, then $f(0)$ must be 0.
- Answer: True.
- Explanation: For an odd function, $f(-x) = -f(x)$. If $x=0$, $f(0) = -f(0)$, which implies $2f(0) = 0$, so $f(0) = 0$ (provided 0 is in the domain).

**Q3.** The interval $(-3, 7)$ can be written as $|x-2| < 5$.
- Answer: True.
- Explanation: The midpoint $c = \frac{-3+7}{2} = 2$ and radius $r = \frac{7-(-3)}{2} = 5$. The standard representation for an open interval of radius $r$ centered at $c$ is $|x-c| < r$, so $|x-2| < 5$.

**Q4.** The domain of a polynomial function is always all real numbers.
- Answer: True.
- Explanation: Polynomials are sums of non-negative integer powers of $x$. Since these expressions are defined for all real numbers, their natural domain is $\mathbb{R}$.

**Q5.** If the range of $f(x)$ is $[0, \infty)$, then the range of $f(x) + 2$ is $[2, \infty)$.
- Answer: True.
- Explanation: Adding a constant to a function shifts the graph vertically by that constant. A vertical shift of +2 adds 2 to every output in the range.

---

## 1.2 Linear and Quadratic Functions

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Linear function | A function of the form $f(x) = mx + b$, whose graph is a straight line. |
| Slope $m$ | The rate of change of $y$ with respect to $x$; the "rise over run" between two points on the line. |
| $y$-intercept $b$ | The $y$-coordinate of the point where a line intersects the $y$-axis (where $x=0$). |
| Point-slope form | An equation for a line using a known point and the slope: $y - b = m(x - a)$. |
| Quadratic function | A function of the form $f(x) = ax^2 + bx + c$ ($a \neq 0$), whose graph is a parabola. |
| Discriminant $D$ | The value $b^2 - 4ac$ that determines the number and type of roots of a quadratic equation. |
| Completing the square | An algebraic method to rewrite a quadratic expression $ax^2 + bx + c$ into the vertex form $a(x-h)^2 + k$. |

### 2. Why This Section Matters
Lines and parabolas are the simplest geometric representations of constant rate-of-change and constant acceleration models, respectively. Linear functions form the basis for the tangent line approximation (the definition of the derivative in Chapter 3), while quadratic functions are essential for curve sketching and optimization problems (finding maximum/minimum values, central to Chapter 4). The algebraic technique of completing the square introduced here is also the foundation for solving integrals involving quadratic terms in later chapters.

### 3. Core Cards

**Card 1: Slope-Intercept Form of a Line**
- Type: Formula
- Statement: The equation of a non-vertical line with slope $m$ and $y$-intercept $b$ is given by:
  $$
y = mx + b
$$
- Conditions / scope: $m$ is a real number. The line is not vertical.
- Note: The slope $m$ represents the rate of change: a 1-unit increase in $x$ results in an $m$-unit change in $y$.

**Card 2: Point-Slope Form of a Line**
- Type: Formula
- Statement: The equation of a non-vertical line with slope $m$ passing through the point $P = (a, b)$ is:
  $$
y - b = m(x - a)
$$
- Conditions / scope: $m$ is a real number. The line is not vertical.
- Note: This is the most robust form for constructing a line equation when you know a point and the slope.

**Card 3: Parallel and Perpendicular Lines**
- Type: Theorem
- Statement: Given two non-vertical lines with slopes $m_1$ and $m_2$:
  - They are **parallel** if and only if $m_1 = m_2$.
  - They are **perpendicular** if and only if $m_1 m_2 = -1$ (or equivalently $m_1 = -\frac{1}{m_2}$).
- Conditions / scope: Applies to non-vertical lines.
- Note: Vertical lines are parallel to each other but have undefined slopes. A horizontal line (slope 0) is perpendicular to a vertical line.

**Card 4: The Quadratic Formula and Discriminant**
- Type: Formula
- Statement: For a quadratic equation $ax^2 + bx + c = 0$ with $a \neq 0$, the roots are:
  $$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
  Let $D = b^2 - 4ac$ be the discriminant. The nature of the roots is determined by $D$:
  - $D > 0$: Two distinct real roots.
  - $D = 0$: One real root (a double root).
  - $D < 0$: No real roots (two complex roots).
- Conditions / scope: $a \neq 0$.
- Note: If $D > 0$, the quadratic factors as $a(x-r_1)(x-r_2)$, where $r_1$ and $r_2$ are the roots.

**Card 5: Completing the Square (Vertex Form)**
- Type: Method / Formula
- Statement: To rewrite $ax^2 + bx + c$ in vertex form $a(x-h)^2 + k$, perform the following steps:
  1. Factor out $a$ from the $x$-terms: $a\left(x^2 + \frac{b}{a}x\right) + c$.
  2. Add and subtract the square of half the coefficient of $x$: $\left(\frac{b}{2a}\right)^2$ inside the parentheses.
  3. Group the perfect square trinomial: $a\left( \left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right) + c$.
  4. Distribute $a$ and combine constants: $a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$.
- Conditions / scope: $a \neq 0$.
- Note: This reveals the vertex $\left(-\frac{b}{2a}, c - \frac{b^2}{4a}\right)$, which gives the maximum (if $a < 0$) or minimum (if $a > 0$) value of the function.

### 4. Methods and Techniques
- **Finding the Equation of a Line:** Use point-slope form $y - b = m(x-a)$ whenever you know a point and the slope. If you have two points $(x_1,y_1)$ and $(x_2,y_2)$, first calculate the slope $m = \frac{y_2-y_1}{x_2-x_1}$, then substitute one point into the point-slope form.
- **Analyzing a Quadratic Function:** Determine its roots via factoring or the quadratic formula. Determine its vertex via completing the square or using the formula $x = -\frac{b}{2a}$. The sign of the leading coefficient $a$ tells you whether the parabola opens upward (minimum at vertex) or downward (maximum at vertex).
- **Testing for a Linear Relationship in Data:** Calculate the rise-over-run ratio $\frac{\Delta y}{\Delta x}$ between successive data points. If this ratio is constant, the data lie on a straight line with that constant slope.

### 5. Common Pitfalls
- **❌ Solving equations like $x^2 = 4$ incorrectly:** Only writing $x=2$ instead of $x=\pm 2$.
- **❌ Assuming the slope of a vertical line is 0:** A vertical line has an *undefined slope* because $\Delta x = 0$, making the run zero and division by zero impossible. A horizontal line is the one with slope 0.
- **❌ Misapplying perpendicular slopes:** Thinking perpendicular lines have slopes that sum to -1 or are the negative of each other. Correct condition: $m_1 m_2 = -1$. For example, slopes of 2 and $-\frac{1}{2}$ are perpendicular, but 2 and -2 are not (they are reflections).
- **❌ Misinterpreting the discriminant:** Forgetting that $D < 0$ indicates no *real* roots. The parabola does not intersect the $x$-axis at all in that case, but it still has complex roots.
- **❌ Judging steepness or growth from a graph without checking the axis scales.** The same data can look dramatic or flat depending on how the axes are scaled. Slope is a number computed from $\Delta y / \Delta x$, not a visual impression; always read the scales before drawing conclusions from a plotted line.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The slope $m$ represents a *constant rate of change*. It is the defining characteristic of a linear function. For a non-linear function, the rate of change varies; the slope formula gives us the *average* rate of change over an interval $[x_1, x_2]$, which is the precursor to the derivative concept (instantaneous rate of change) in Chapter 3. For quadratic functions, completing the square is essentially shifting the coordinate system to align with the vertex, making the geometry of the parabola evident.

(b) **Visualization suggestions:**
- **Concept:** Parabola Vertex and Roots.
  - **Component:** Interactive Quadratic Explorer.
  - **Parameters:** Sliders for $a, b, c$ in $f(x) = ax^2 + bx + c$. The graph updates live, displaying the vertices, the line of symmetry, and the roots if they are real. The user can slide $a$ to see how it affects width and orientation, and $b$ to move the vertex left and right.
  - **Observation Expected:** User observes that the vertex always occurs at $x = -\frac{b}{2a}$, and that when the discriminant is negative, the graph floats entirely above or below the $x$-axis.
- **Concept:** Fitting a Line to Data.
  - **Component:** Interactive Linear Regression Prototype.
  - **Parameters:** A scatter plot of three data points that do not perfectly form a line. The user can drag the line to try to fit it. The component shows the sum of vertical squared errors (the cost function).
  - **Observation Expected:** The user discovers that "best fit" isn't always a perfect fit, and how errors change as the slope and intercept are manipulated.

### 7. Concept Self-Check (original)
**Q1.** Two lines are perpendicular if and only if their slopes are negative reciprocals of each other.
- Answer: True.
- Explanation: The product of their slopes must equal -1, which is equivalent to $m_1 = -1/m_2$. Note: This applies to non-vertical/non-horizontal lines.

**Q2.** A quadratic function $f(x) = ax^2 + bx + c$ can have a maximum value even if the discriminant is negative.
- Answer: True.
- Explanation: The maximum/minimum depends on the leading coefficient $a$. If $a < 0$, the parabola opens downward and has a maximum, regardless of the number of real roots. Note that if $a < 0$ and $D < 0$, the parabola lies entirely below the $x$-axis, so the maximum value is negative — but it is still a maximum.

**Q3.** The quadratic formula is derived by taking the square root of the discriminant.
- Answer: False.
- Explanation: The quadratic formula is derived by *completing the square* on the general equation $ax^2+bx+c=0$. The discriminant is simply the expression inside the square root.

**Q4.** For a linear function $y = mx + b$, the vertical change $\Delta y$ is constant for a given horizontal change $\Delta x$.
- Answer: True.
- Explanation: The slope $m = \frac{\Delta y}{\Delta x}$ is constant for a linear function. Therefore, $\Delta y = m \Delta x$.

**Q5.** A line passing through the points $(2,3)$ and $(2,9)$ has a slope of 3.
- Answer: False.
- Explanation: The $x$-coordinate is identical for both points. This means the line is vertical. The slope of a vertical line is undefined, not 3.

---

## 1.3 The Basic Classes of Functions

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Power function | A function of the form $f(x) = x^m$ where $m$ is a real constant. |
| Polynomial | A sum of multiples of non-negative integer powers of $x$. |
| Degree of a polynomial | The highest power of $x$ with a non-zero coefficient in the polynomial. |
| Rational function | A ratio of two polynomials, $f(x) = P(x)/Q(x)$. |
| Algebraic function | A function built from polynomials and rational functions using roots, sums, products, and quotients. |
| Transcendental function | A function that is not algebraic (e.g., exponential, trigonometric, logarithmic). |
| Composition | The application of one function to the result of another: $(f \circ g)(x) = f(g(x))$. |
| Piecewise-defined function | A function defined by different expressions over different intervals of its domain. |

### 2. Why This Section Matters
Calculus is primarily concerned with a specific set of functions—the "elementary functions"—because they are differentiable and integrable using standard techniques. This section establishes a taxonomy of these functions (polynomials, rationals, algebraic, exponential, trig, log). Recognizing these classes is essential because each class has specific rules in calculus (e.g., the Power Rule applies to polynomials and certain algebraic functions, while the transcendental functions require specialized differentiation formulas covered in Chapter 3). Composition is the backbone of the Chain Rule (Chapter 3).

### 3. Core Cards

**Card 1: Definition of a Polynomial**
- Type: Definition
- Statement: A polynomial $P(x)$ in $x$ is a sum of multiples of power functions $x^n$ where $n$ is a whole number (positive integer or zero):
  $$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0
$$
  - The **degree** of $P$ is $n$ (assuming $a_n \neq 0$). $a_n$ is the leading coefficient.
- Conditions / scope: Exponents are non-negative integers. Coefficients are real numbers.
- Note: The natural domain of any polynomial is all real numbers $\mathbb{R}$.

**Card 2: Definition of a Rational Function**
- Type: Definition
- Statement: A rational function is a quotient of two polynomials $P(x)$ and $Q(x)$:
  $$
f(x) = \frac{P(x)}{Q(x)}
$$
  where $Q(x) \neq 0$.
- Conditions / scope: $Q(x)$ is not the zero polynomial.
- Note: The domain of a rational function is all real numbers except where $Q(x) = 0$. Note that every polynomial is also a rational function (where $Q(x) = 1$).

**Card 3: Definition of Algebraic and Transcendental Functions**
- Type: Definition
- Statement:
  - An **algebraic function** is formed by taking sums, products, quotients, and roots of polynomials and rational functions. (e.g., $f(x) = \sqrt{1+x^2}$).
  - A **transcendental function** is any function that is not algebraic. Examples include exponential, trigonometric, logarithmic, and various special functions (Bessel, gamma).
- Conditions / scope: Applies to broad classes of functions.
- Note: Calculus deals primarily with the "elementary functions," which are built from polynomials, rationals, algebraic, exponential, and trigonometric functions through the operations of addition, subtraction, multiplication, division, and composition.

**Card 4: Composition of Functions**
- Type: Definition
- Statement: The composition of two functions $f$ and $g$ is the function $f \circ g$ defined by:
  $$
(f \circ g)(x) = f(g(x))
$$
  The domain of $f \circ g$ is the set of values $x$ in the domain of $g$ such that $g(x)$ lies in the domain of $f$.
- Conditions / scope: $g(x)$ must be in the domain of $f$.
- Note: Composition is not commutative ($f \circ g \neq g \circ f$ in general). The process is often referred to as "chaining" functions together.

**Card 5: Piecewise-Defined Functions**
- Type: Definition
- Statement: A piecewise-defined function is a function defined by two or more distinct mathematical expressions, each applied to a specific part of the domain. Example:
  $$
f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ x+1 & \text{if } x \ge 0 \end{cases}
$$
- Conditions / scope: The subdomains must not overlap (or if they do, the function must be defined unambiguously).
- Note: The absolute value function is a common example of a piecewise function.

### 4. Methods and Techniques
- **Finding the Domain of an Algebraic Function:** Examine each operation in the formula. Require that even-indexed roots (e.g., square roots) have non-negative arguments. Require that denominators are non-zero.
- **Constructing Composite Functions:** To compute $(f \circ g)(x)$, substitute the expression for $g(x)$ into every occurrence of the variable in $f(x)$.
- **Analyzing Piecewise Functions:** Break the problem into separate cases corresponding to the intervals in the definition. Determine the domain as the union of all intervals where the function is defined. Determine the range by calculating the outputs of each piece over its respective domain.

### 5. Common Pitfalls
- **❌ Thinking $f(x) = x^{-1}$ is a polynomial:** $x^{-1}$ is a power function with a negative exponent, so it belongs to the algebraic (specifically rational) class, but not the polynomial class. Polynomials only have non-negative integer powers.
- **❌ Assuming $\sqrt{x^2} = x$:** Without knowing the domain, $\sqrt{x^2} = |x|$, not $x$. This is a critical consideration when simplifying algebraic functions.
- **❌ Forgetting to check domain restrictions for the *inner* function in composition:** In $f \circ g$, the input $x$ must be in the domain of $g$ first. Only then can you check if $g(x)$ is in the domain of $f$.
- **❌ Assuming "elementary" means "algebraic":** The elementary functions include many transcendental functions ($e^x$, $\sin x$, $\ln x$), because "elementary" refers to anything built from the basic function classes via sums, products, quotients, and composition. The algebraic/transcendental split is a separate classification: algebraic functions use only roots and arithmetic on polynomials, while transcendental functions do not — yet both can be elementary.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The **CONCEPTUAL INSIGHT** here is about the "well-behaved" nature of elementary functions. Calculus techniques are specifically designed for them because they are smooth, continuous, and differentiable almost everywhere. Composition is essentially mathematical "chaining"—like feeding the output of one factory machine directly into the input of a second machine. Piecewise functions represent physical realities where rules change suddenly based on the state of the system (e.g., tax brackets based on income).

(b) **Visualization suggestions:**
- **Concept:** Composition of Functions.
  - **Component:** Composition Machine Visualizer.
  - **Parameters:** Two functions $f(x)$ and $g(x)$ as sliders. A slider for $x$. The component visualizes the step-by-step flow: $x$ enters machine $g$, the output $g(x)$ enters machine $f$, and the final output $f(g(x))$ is produced. The user can adjust $x$ and the functions interactively to see how the intermediate value changes.
  - **Observation Expected:** User discovers that order matters ($f(g(x))$ vs $g(f(x))$) and that the domain of the result is heavily restricted by the inner function.
- **Concept:** Piecewise Functions.
  - **Component:** Interactive Piecewise Function Grapher.
  - **Parameters:** A blank piecewise function with two intervals. The user specifies the interval boundaries and the expression for each piece. The component plots the final graph, highlighting which parts of the curve belong to which rule. Tooltips show the active rule based on mouse hover position.
  - **Observation Expected:** User learns how to "glue" functions together and recognizes the discontinuity or sharp corners that occur when the pieces don't meet at the boundaries.

### 7. Concept Self-Check (original)
**Q1.** The function $f(x) = \frac{x^2}{x}$ is a rational function and has the same domain as the polynomial $g(x) = x$.
- Answer: False.
- Explanation: While $f(x)$ simplifies to $x$ algebraically, its domain is all real numbers except $x = 0$, whereas $g(x)$'s domain is all real numbers.

**Q2.** Every polynomial is also a rational function.
- Answer: True.
- Explanation: You can write $P(x)$ as $\frac{P(x)}{1}$, which is a ratio of two polynomials $P(x)$ and $1$. Hence, it fits the definition of a rational function.

**Q3.** The domain of $(f \circ g)(x)$ is exactly the domain of $g(x)$.
- Answer: False.
- Explanation: The domain of the composite is $x$ in the domain of $g$ *such that* $g(x)$ is in the domain of $f$. If $g(x)$ goes outside $f$'s domain, that $x$ is excluded.

**Q4.** The sum of two algebraic functions is always an algebraic function.
- Answer: True.
- Explanation: The algebraic functions are closed under the operations of addition, subtraction, multiplication, division, and root extraction.

**Q5.** An exponential function like $f(x) = 2^x$ is considered an algebraic function because it can be raised to the power of two.
- Answer: False.
- Explanation: $f(x) = 2^x$ has a variable exponent and a constant base. This is a transcendental function, not algebraic. Algebraic functions require constant exponents (e.g., $x^2$).

---

## 1.4 Trigonometric Functions

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Radian | The angle subtended at the center of a circle by an arc equal in length to the circle's radius. |
| Unit circle | A circle of radius 1 centered at the origin, used to define trigonometric functions for all angles. |
| Period | The smallest positive constant $T$ such that $f(x+T) = f(x)$ for all $x$ in the domain. |
| Amplitude | The vertical distance from the central horizontal axis to the maximum or minimum of a sinusoidal function. |
| Trig identity | An equation involving trigonometric functions that holds true for all angles for which the functions are defined. |
| Law of Cosines | A generalization of the Pythagorean theorem relating the lengths of the sides of a triangle to the cosine of one of its angles. |

### 2. Why This Section Matters
Trigonometric functions model periodic phenomena (tides, sound waves, planetary motion). In calculus, they are essential functions to differentiate and integrate. The unit circle definition introduced here provides the necessary framework to compute limits involving trigonometry (Chapter 2) and to derive derivative rules for sine and cosine (Chapter 3). The identity relationships are central to solving trigonometric integrals in Chapter 5.

### 3. Core Cards

**Card 1: Radian Measure**
- Type: Definition
- Statement: An angle of $\theta$ radians is the ratio of the arc length $s$ swept out by a rotation to the radius $r$ of the circle: $\theta = \frac{s}{r}$. On a unit circle ($r=1$), the radian measure equals the arc length.
- Conditions / scope: $\theta$ is a real number representing a rotation.
- Note: A full circle corresponds to $2\pi$ radians. **Angle conversion:** $\text{Radians} \times \frac{180}{\pi} = \text{Degrees}$. $\text{Degrees} \times \frac{\pi}{180} = \text{Radians}$.

**Card 2: Unit Circle Definitions of Sine and Cosine**
- Type: Definition
- Statement: Let $P = (x, y)$ be the point on the unit circle corresponding to angle $\theta$. Then:
  $$
\cos \theta = x, \quad \sin \theta = y
$$
  The point on a circle of radius $r$ centered at the origin corresponding to angle $\theta$ is $(r \cos \theta, r \sin \theta)$.
- Conditions / scope: $\theta$ can be any real number.
- Note: This definition extends sine and cosine to all real angles, not just acute angles found in a right triangle.

**Card 3: Periodicity and Parity of Sine and Cosine**
- Type: Definition / Theorem
- Statement:
  - **Periodicity:** $\sin(\theta + 2\pi k) = \sin \theta$, $\cos(\theta + 2\pi k) = \cos \theta$ for any integer $k$.
  - **Parity:** $\sin(-\theta) = -\sin \theta$ (Odd), $\cos(-\theta) = \cos \theta$ (Even).
- Conditions / scope: For all real numbers $\theta$ and integers $k$.
- Note: Since sine and cosine have period $2\pi$, they repeat their output values every full rotation.

**Card 4: Other Trigonometric Functions**
- Type: Definition
- Statement: The remaining four trigonometric functions are defined in terms of sine and cosine:
  $$
\tan \theta = \frac{\sin \theta}{\cos \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \csc \theta = \frac{1}{\sin \theta}
$$
- Conditions / scope: $\cos \theta \neq 0$ for $\tan \theta$ and $\sec \theta$; $\sin \theta \neq 0$ for $\cot \theta$ and $\csc \theta$.
- Note: These are often used in simplifying complex trigonometric expressions. They are also periodic; $\tan \theta$ and $\cot \theta$ have period $\pi$, while $\sec \theta$ and $\csc \theta$ have period $2\pi$.

**Card 5: Fundamental Trigonometric Identities**
- Type: Formula
- Statement: The Pythagorean identity and its variants:
  $$
\sin^2 x + \cos^2 x = 1, \quad \tan^2 x + 1 = \sec^2 x, \quad 1 + \cot^2 x = \csc^2 x
$$
  Other important identities:
  - Complementary Angles: $\sin(\frac{\pi}{2} - x) = \cos x$, $\cos(\frac{\pi}{2} - x) = \sin x$.
  - Addition Formulas: $\sin(x+y) = \sin x \cos y + \cos x \sin y$, $\cos(x+y) = \cos x \cos y - \sin x \sin y$.
  - Double-Angle Formulas: $\sin 2x = 2 \sin x \cos x$, $\cos 2x = \cos^2 x - \sin^2 x$, $\sin^2 x = \frac{1-\cos 2x}{2}$, $\cos^2 x = \frac{1+\cos 2x}{2}$.
- Conditions / scope: Valid for all real $x$ where functions are defined.
- Note: These identities are critical for simplifying trigonometric integrands in calculus. The half-angle forms will be widely used in integration.

**Card 6: Law of Cosines**
- Type: Theorem
- Statement: For a triangle with sides $a, b$, and $c$, where $\theta$ is the angle opposite side $c$:
  $$
c^2 = a^2 + b^2 - 2ab \cos \theta
$$
- Conditions / scope: Valid for any triangle.
- Note: If $\theta = \frac{\pi}{2}$, then $\cos \theta = 0$, and the Law of Cosines reduces to the Pythagorean Theorem.

### 4. Methods and Techniques
- **Evaluating Trigonometric Functions:** Draw the angle on the unit circle. Determine the coordinates of the point where the terminal side of the angle intersects the circle. The $x$-coordinate is $\cos \theta$ and the $y$-coordinate is $\sin \theta$. Use the other trigonometric definitions to compute the remaining values. For common angles ($\pi/6, \pi/4, \pi/3, \pi/2$), memorize the coordinates.
- **Sketching Transformations of Trig Graphs:** For $y = A \sin(B(x-C)) + D$ or $y = A \cos(B(x-C)) + D$:
   1. The amplitude is $|A|$.
   2. The period is $\frac{2\pi}{|B|}$.
   3. The phase shift is $C$.
   4. The vertical shift is $D$.
   Apply horizontal/vertical translations and scalings to the base sine or cosine wave.
- **Solving Trigonometric Equations:** Isolate the trig function. Find the solutions within one period (often $[0, 2\pi)$ for sine/cosine, or $(-\pi/2, \pi/2)$ for tangent). Add integer multiples of the function's period to find the general solution.
- **Simplifying Expressions:** Use the fundamental identities to replace complex terms with simpler ones. For example, replace $\tan^2 x$ with $\sec^2 x - 1$, or use the double-angle formulas to reduce powers of sine or cosine.

### 5. Common Pitfalls
- **❌ Forgetting to set calculators to RADIAN mode.** The textbook convention (and all calculus) uses radians. Accidentally using degrees when evaluating limits or derivatives yields completely incorrect results.
- **❌ Confusing $f^{-1}(x)$ with $1/f(x)$.** In trigonometry, $\sin^{-1} x$ is the arcsine function (inverse), not the cosecant function $\frac{1}{\sin x}$. This is a severe mistake in finding angles for trigonometric equations.
- **❌ Misapplying the period of tangent.** Thinking $\tan(\theta+\pi) = -\tan(\theta)$ or $\tan(\theta+2\pi) = \tan(\theta)$. Since tangent completes a full cycle in $\pi$ radians, $\tan(\theta+\pi) = \tan(\theta)$. Using $2\pi$ results in finding extra, repeated solutions.
- **❌ Incorrectly shifting trig functions horizontally.** For $f(\theta) = \cos(2\theta + \pi)$, the shift is $-\frac{\pi}{2}$, not $-\pi$. You must factor out the coefficient of $\theta$ to identify the phase shift: $f(\theta) = \cos(2(\theta + \frac{\pi}{2}))$.
- **❌ Incorrectly dividing by zero in trig identities.** Treating $\tan \theta$ as $\frac{\sin \theta}{\cos \theta}$ without noting that $\cos \theta \neq 0$. Similarly for $\sec \theta$ ($\cos \theta \neq 0$) and $\csc \theta$ ($\sin \theta \neq 0$).

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The unit circle definition provides a dynamic mental model for sine and cosine. As the angle $\theta$ rotates, the point $P=(\cos \theta, \sin \theta)$ travels along the circle. The height of the point gives sine, and the horizontal distance gives cosine. This visualization explains their periodicity (the points repeat after $2\pi$) and their symmetry. To understand amplitude, think of it as the maximum "height" (or depth) of a wave, or the scaling factor applied to the unit circle's output.

(b) **Visualization suggestions:**
- **Concept:** Unit Circle and Trig Functions.
  - **Component:** Interactive Unit Circle Mapper.
  - **Parameters:** A slider for angle $\theta$ ranging from $0$ to $4\pi$. The circle is drawn with radius 1. A point $P=(\cos \theta, \sin \theta)$ travels along the circle. Lines are drawn connecting the point to the axes. Two separate trace graphs are displayed: one for $y = \sin x$ and one for $y = \cos x$, updated in real-time as $\theta$ moves.
  - **Observation Expected:** User visually connects the physical movement of the point to the wave graphs. They see that sine and cosine are phase-shifted by $\pi/2$, and they can observe the domain cycle repeatedly.
- **Concept:** Amplitude and Period.
  - **Component:** Sine Wave Shaper.
  - **Parameters:** Sliders for $A$ (Amplitude), $B$ (Frequency), $C$ (Phase shift), $D$ (Vertical shift). The graph $y = A \sin(B(x+C)) + D$ is plotted. A reference unit circle is shown next to it, scaled by $A$.
  - **Observation Expected:** User discovers that $A$ changes the height of the wave, $B$ changes how fast it oscillates, $C$ slides it horizontally, and $D$ moves it vertically.

### 7. Concept Self-Check (original)
**Q1.** $\sin^2 \theta + \cos^2 \theta = 1$ is true for all real numbers $\theta$.
- Answer: True.
- Explanation: This is a direct consequence of the Pythagorean Theorem applied to a triangle formed within the unit circle, and is true for all $\theta$.

**Q2.** The function $f(\theta) = \tan \theta$ has a period of $2\pi$.
- Answer: False.
- Explanation: $\tan \theta$ has a period of $\pi$. You can verify this by checking that $\tan(\theta + \pi) = \tan \theta$ for all defined $\theta$.

**Q3.** The Law of Cosines is a specialized version of the Pythagorean theorem for non-right triangles.
- Answer: True.
- Explanation: It includes the term $-2ab \cos \theta$, which disappears ($=0$) when $\theta = 90^\circ$, effectively simplifying back to the Pythagorean theorem.

**Q4.** $\cos(\theta + \pi) = \cos \theta$ for all $\theta$.
- Answer: False.
- Explanation: The period of $\cos \theta$ is $2\pi$. Adding $\pi$ gives the exact opposite value: $\cos(\theta + \pi) = -\cos \theta$.

**Q5.** Radians are dimensionless units.
- Answer: True.
- Explanation: Radians are defined as the ratio of an arc length to a radius ($m/m$), effectively canceling out units. This is why they are preferred in calculus (specifically, for derivatives of trig functions to work properly).

---

## 1.5 Inverse Functions

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Inverse function $f^{-1}$ | A function that reverses the effect of another function $f$, satisfying $f^{-1}(f(x))=x$ and $f(f^{-1}(x))=x$. |
| One-to-one function | A function where each output value corresponds to exactly one input value. |
| Horizontal Line Test | A graphical test to determine if a function is one-to-one: every horizontal line must intersect the graph at most once. |
| Arcsine ($\sin^{-1} x$) | The inverse of the sine function, restricted to the domain $[-\pi/2, \pi/2]$. |
| Arccosine ($\cos^{-1} x$) | The inverse of the cosine function, restricted to the domain $[0, \pi]$. |
| Arctangent ($\tan^{-1} x$) | The inverse of the tangent function, restricted to the domain $(-\pi/2, \pi/2)$. |

### 2. Why This Section Matters
Many essential functions in calculus—particularly logarithms and inverse trigonometric functions—are defined directly as inverses of other functions. This section provides the theoretical framework for when an inverse exists (one-to-one functions) and how to find it. The concept of "restricting a domain to make a function one-to-one" is critical for defining the inverse trigonometric functions, which we will later differentiate and integrate in Chapters 3 and 5.

### 3. Core Cards

**Card 1: Definition of an Inverse Function**
- Type: Definition
- Statement: Let $f$ have domain $D$ and range $R$. If there is a function $g$ with domain $R$ such that $g(f(x)) = x$ for all $x \in D$ and $f(g(x)) = x$ for all $x \in R$, then $f$ is **invertible**. The function $g$ is called the **inverse function** and is denoted $f^{-1}$.
- Conditions / scope: Both $g(f(x))$ and $f(g(x))$ must hold.
- Note: The domain of $f$ becomes the range of $f^{-1}$, and the range of $f$ becomes the domain of $f^{-1}$.

**Card 2: One-to-One Functions and Existence of Inverses**
- Type: Theorem
- Statement: A function $f$ is **one-to-one** on a domain $D$ if, for every value $c$, the equation $f(x)=c$ has at most one solution for $x \in D$. Equivalently, if $a \neq b$, then $f(a) \neq f(b)$. The inverse function $f^{-1}$ exists if and only if $f$ is one-to-one on its domain $D$.
- Conditions / scope: Applies to any function with a given domain.
- Note: Monotonic functions (strictly increasing or strictly decreasing) are always one-to-one.

**Card 3: Horizontal Line Test**
- Type: Definition / Test
- Statement: A function of $x$ is one-to-one if and only if every horizontal line intersects the graph of the function in at most one point.
- Conditions / scope: Used on graphs in the $xy$-plane.
- Note: The Horizontal Line Test is the graphical analog of the algebraic definition of one-to-one. It is the counterpart to the Vertical Line Test for functions.

**Card 4: Reflection Property of Inverses**
- Type: Theorem / Property
- Statement: The graph of $f^{-1}$ is obtained by reflecting the graph of $f$ across the line $y = x$.
- Conditions / scope: $f$ must be one-to-one.
- Note: This happens because the points $(a, b)$ on the graph of $f$ correspond to the points $(b, a)$ on the graph of $f^{-1}$.

**Card 5: Inverse Trigonometric Functions (Arcsine & Arccosine)**
- Type: Definition
- Statement:
  - **Arcsine:** $\theta = \sin^{-1} x$ is the unique angle in $[-\pi/2, \pi/2]$ such that $\sin \theta = x$. Domain: $[-1, 1]$. Range: $[-\pi/2, \pi/2]$.
  - **Arccosine:** $\theta = \cos^{-1} x$ is the unique angle in $[0, \pi]$ such that $\cos \theta = x$. Domain: $[-1, 1]$. Range: $[0, \pi]$.
- Conditions / scope: Input $x$ must be in $[-1, 1]$.
- Note: Be careful with notation! $\sin^{-1} x \neq \frac{1}{\sin x}$. The inverse sine function is also often denoted $\arcsin x$.

**Card 6: Inverse Trigonometric Functions (Arctangent & Arccotangent)**
- Type: Definition
- Statement:
  - **Arctangent:** $\theta = \tan^{-1} x$ is the unique angle in $(-\pi/2, \pi/2)$ such that $\tan \theta = x$. Domain: $\mathbb{R}$. Range: $(-\pi/2, \pi/2)$.
  - **Arccotangent:** $\theta = \cot^{-1} x$ is the unique angle in $(0, \pi)$ such that $\cot \theta = x$. Domain: $\mathbb{R}$. Range: $(0, \pi)$.
- Conditions / scope: $x \in \mathbb{R}$.
- Note: Unlike sine and cosine, the arctangent function is defined for all real numbers because tangent's range is $\mathbb{R}$.

**Card 7: Inverse Trigonometric Functions (Arcsecant & Arccosecant)**
- Type: Definition
- Statement:
  - **Arcsecant:** $\theta = \sec^{-1} x$ is the unique angle in $[0, \pi/2) \cup (\pi/2, \pi]$ such that $\sec \theta = x$. Domain: $|x| \ge 1$.
  - **Arccosecant:** $\theta = \csc^{-1} x$ is the unique angle in $[-\pi/2, 0) \cup (0, \pi/2]$ such that $\csc \theta = x$. Domain: $|x| \ge 1$.
- Conditions / scope: $|x| \ge 1$.
- Note: These functions are less frequently encountered but are included for completeness; their domains reflect the fact that $\sec x$ and $\csc x$ have ranges outside of $[-1, 1]$.

### 4. Methods and Techniques
- **Finding the Inverse Function Algebraically (Two-Step Process):**
  1. Solve the equation $y = f(x)$ for $x$ in terms of $y$. The solution, $x = g(y)$, is the inverse function expressed as a function of $y$.
  2. Interchange the variables $x$ and $y$ to write the inverse in standard form: $y = f^{-1}(x)$.
- **Testing for One-to-One:**
  - **Graphically:** Use the Horizontal Line Test. If any horizontal line intersects the graph more than once, the function is not one-to-one.
  - **Algebraically:** Check if $f(a) = f(b) \implies a = b$ for all $a, b$ in the domain.
  - **Monotonicity:** Use the fact that strictly increasing or strictly decreasing functions are always one-to-one (this is often the fastest way to prove invertibility).
- **Simplifying Compositions with Inverse Trig Functions:** To simplify expressions like $\cos(\sin^{-1} x)$ or $\tan(\cos^{-1} x)$, draw a right triangle. Let one acute angle be $\theta$, set the opposite/hypotenuse or adjacent/hypotenuse based on the internal inverse function, use the Pythagorean theorem to find the missing side, and then read off the ratio for the outer trigonometric function. Alternatively, use the Pythagorean identity $\sin^2 \theta + \cos^2 \theta = 1$. Be sure to check the sign of the result based on the quadrant defined by the inverse function's principal range.

### 5. Common Pitfalls
- **❌ Confusing $f^{-1}(x)$ with $\frac{1}{f(x)}$.** The notation $f^{-1}$ denotes the inverse function, not the reciprocal. For example, $\sin^{-1} x$ is the arcsine, not $\csc x = 1/\sin x$.
- **❌ Forgetting the restricted domains of inverse trigonometric functions.** For example, $\sin^{-1}(\sin(5\pi/4))$ is NOT $5\pi/4$. The output must be in the principal range $[-\pi/2, \pi/2]$, so the result is $-\pi/4$. In general, the inverse property $f^{-1}(f(x)) = x$ only holds when $x$ is in the restricted domain of $f$ that was used to define $f^{-1}$.
- **❌ Assuming a function's inverse is always a function.** An inverse only exists if the original function is one-to-one. Functions like $f(x) = x^2$ are not one-to-one over $\mathbb{R}$ and do not have an inverse over that domain (unless you restrict the domain to, say, $[0, \infty)$).
- **❌ Failing to switch variables at the end of the process.** When solving $y=f(x)$ for $x$, you get the inverse in terms of $y$. You must swap $x$ and $y$ in the final answer to return to the standard $y=f^{-1}(x)$ notation.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The **CONCEPTUAL INSIGHT** that an inverse function "reverses the effect" of the original is best understood by visualizing it as an "undo" button. If a function $f$ takes an input $x$ to an output $y$, then $f^{-1}$ takes the same $y$ back to the original $x$. Graphically, reflecting over $y=x$ swaps the roles of the input and output axes. The domain and range swap during this reflection. This is also what causes a one-to-one condition: if two different inputs produced the same output (like in a parabola), reflecting the graph would give us two possible inputs for a single output, which breaks the definition of a function.

(b) **Visualization suggestions:**
- **Concept:** Reflection Property of Inverses.
  - **Component:** Interactive Reflection Tool.
  - **Parameters:** A slider to choose a function (e.g., $x^2$, $x^3$, $2x+1$, $\sin x$). The user can toggle "Restrict domain" to restrict the input to a range where the function becomes one-to-one (e.g., $x \ge 0$ for $x^2$). The tool plots the original function and its reflection $y = f^{-1}(x)$ across the line $y = x$.
  - **Observation Expected:** User sees that for $y = x^2$ without the restriction, the reflection is a sideways parabola that fails the Vertical Line Test. With the restriction, the reflection becomes a valid graph of a function.
- **Concept:** Principal Ranges of Inverse Trig Functions.
  - **Component:** Inverse Trig Unit Circle Visualizer.
  - **Parameters:** A slider for the input $x \in [-1, 1]$. The unit circle is displayed. A red arc sweeps from $0$ to the principal angle $\theta = \sin^{-1} x$. The angle is displayed in both radians and degrees. The component shows the restricted range where the angle must lie.
  - **Observation Expected:** User learns that even though $\sin x = 1/2$ has infinitely many solutions, $\sin^{-1}(1/2)$ is uniquely defined as $\pi/6$ because of the restricted range.

### 7. Concept Self-Check (original)
**Q1.** A function must be strictly increasing on its entire domain to have an inverse.
- Answer: False.
- Explanation: While strictly increasing functions are always one-to-one, a function can also be strictly decreasing or even non-monotonic (e.g., $f(x) = 1/x$ is decreasing on $(-\infty,0)$ and $(0,\infty)$) and still be one-to-one on its domain.

**Q2.** The domain of $f^{-1}$ is exactly the range of $f$.
- Answer: True.
- Explanation: The inverse function maps outputs of $f$ back to inputs. Therefore, its domain consists of all possible outputs of $f$, which is the range of $f$.

**Q3.** $\arcsin(\sin \pi) = \pi$.
- Answer: False.
- Explanation: $\sin \pi = 0$, and $\arcsin(0) = 0$. Since $\pi$ is not in the principal range $[-\pi/2, \pi/2]$, $\arcsin(\sin \pi) = 0$ (since $0$ is the unique angle in $[-\pi/2, \pi/2]$ for which $\sin 0 = 0$).

**Q4.** Every polynomial function of odd degree is one-to-one.
- Answer: False.
- Explanation: While odd-degree polynomials like $x^3$ are one-to-one, others like $f(x) = x^3 - x$ are not (they have a wavy shape and fail the Horizontal Line Test).

**Q5.** A function that is one-to-one on its domain is always invertible.
- Answer: True.
- Explanation: By Theorem 1 (Existence of Inverses), the inverse exists if and only if $f$ is one-to-one on its domain. The inverse function's domain will be the range of $f$.

---

## 1.6 Exponential and Logarithmic Functions

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Exponential function | A function of the form $f(x) = b^x$ where $b > 0, b \neq 1$. |
| Base $b$ | The constant number being raised to the variable power $x$ in an exponential function. |
| Natural exponential base $e$ | An irrational number approximately equal to 2.718, the most convenient base for calculus. |
| Logarithmic function | The inverse of an exponential function, $f(x) = \log_b x$. |
| Natural logarithm ($\ln x$) | The logarithm with base $e$. |
| Logarithm laws | Algebraic properties that convert multiplication into addition, and powers into multiplication. |
| Hyperbolic functions | Specific combinations of $e^x$ and $e^{-x}$ (like $\sinh x$ and $\cosh x$) that model certain physical shapes (e.g., hanging cables). |

### 2. Why This Section Matters
Exponential functions model growth and decay processes (population, radioactive decay, compound interest) where the rate of change is proportional to the current amount. Logarithms solve equations where the variable is in the exponent, and their laws are central to the technique of **logarithmic differentiation** in Chapter 3. The number $e$ is the most fundamental base in calculus because the derivative of $e^x$ is itself. Hyperbolic functions appear frequently in engineering, physics, and in integration formulas later on.

### 3. Core Cards

**Card 1: Definition of the Exponential Function**
- Type: Definition
- Statement: An exponential function is a function of the form $f(x) = b^x$, where $b > 0$ and $b \neq 1$.
- Conditions / scope: Base $b$ must be positive and not equal to 1.
- Note:
  - $f(x) = b^x$ is increasing for $b > 1$ and decreasing for $0 < b < 1$.
  - The domain is $\mathbb{R}$ and the range is $(0, \infty)$.

**Card 2: The Number $e$**
- Type: Definition / Formula
- Statement: The number $e$ is a fundamental irrational constant approximately equal to $2.718281828\ldots$. It can be characterized in several ways:
  - $e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = \lim_{x \to 0} (1+x)^{1/x}$.
  - $e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \dots$.
  - It is the unique base for which the slope of the tangent line to $y = b^x$ at $(0,1)$ is 1.
- Conditions / scope: $n$ is a positive integer or real number approaching infinity.
- Note: For calculus purposes, the exponential function $f(x) = e^x$ is often referred to simply as "the exponential function". It is the preferred base because its derivative is itself.

**Card 3: Definition of Logarithms**
- Type: Definition
- Statement: The logarithm to the base $b$, denoted $\log_b x$, is the inverse function of $f(x) = b^x$. By definition, $y = \log_b x$ if and only if $b^y = x$. Therefore, $b^{\log_b x} = x$ and $\log_b(b^x) = x$.
- Conditions / scope: $b > 0, b \neq 1$. Domain of $\log_b x$ is $(0, \infty)$. Range is $\mathbb{R}$.
- Note: The **natural logarithm**, denoted $\ln x$, is the logarithm to the base $e$ ($\ln x = \log_e x$).

**Card 4: Laws of Logarithms**
- Type: Formula
- Statement: For $x, y > 0$ and any $n$:
  - **Product Law:** $\log_b(xy) = \log_b x + \log_b y$
  - **Quotient Law:** $\log_b(x/y) = \log_b x - \log_b y$
  - **Power Law:** $\log_b(x^n) = n \log_b x$
  - **Special Values:** $\log_b(1) = 0, \log_b(b) = 1$
  - **Reciprocal Law:** $\log_b(1/x) = -\log_b x$ (derived from Quotient Law)
- Conditions / scope: $x, y > 0$. $b > 0, b \neq 1$.
- Note: A common mnemonic is "Logs turn multiplication into addition, division into subtraction, and exponents into coefficients."

**Card 5: Change of Base Formulas**
- Type: Formula
- Statement: To convert an exponential or logarithmic function from one base $b$ to another base $a$ (where $a, b > 0, a, b \neq 1$):
  - Exponential: $b^x = a^{x \log_a b}$ and $b^x = e^{x \ln b}$
  - Logarithmic: $\log_b x = \frac{\log_a x}{\log_a b}$ and $\log_b x = \frac{\ln x}{\ln b}$
- Conditions / scope: $x > 0$ for logarithmic forms.
- Note: These formulas show that from a calculus and algebraic perspective, any exponential function can be converted into base $e$, simplifying differential and integral calculations.

**Card 6: Hyperbolic Sine and Cosine**
- Type: Definition
- Statement: The hyperbolic sine and cosine are defined as the following combinations of $e^x$ and $e^{-x}$:
  $$
\sinh x = \frac{e^x - e^{-x}}{2}, \quad \cosh x = \frac{e^x + e^{-x}}{2}
$$
- Conditions / scope: For all real $x$.
- Note: They are pronounced "sinch" and "cosh". They are odd ($\sinh(-x) = -\sinh x$) and even ($\cosh(-x) = \cosh x$) functions, respectively.

**Card 7: Fundamental Hyperbolic Identity**
- Type: Formula
- Statement: $\cosh^2 x - \sinh^2 x = 1$.
- Conditions / scope: For all real $x$.
- Note: This identity is the hyperbolic analog of the Pythagorean identity $\sin^2 x + \cos^2 x = 1$. It means the parametric point $(\cosh t, \sinh t)$ lies on the hyperbola $x^2 - y^2 = 1$.

**Card 8: Other Hyperbolic Functions**
- Type: Definition
- Statement: Similar to their trigonometric counterparts, the remaining hyperbolic functions are defined by:
  $$
\tanh x = \frac{\sinh x}{\cosh x}, \quad \coth x = \frac{\cosh x}{\sinh x}, \quad \text{sech } x = \frac{1}{\cosh x}, \quad \text{csch } x = \frac{1}{\sinh x}
$$
- Conditions / scope: $\cosh x \neq 0$ for $\tanh x$ and $\text{sech } x$; $\sinh x \neq 0$ for $\coth x$ and $\text{csch } x$.
- Note: The domain of $\coth x$ and $\text{csch } x$ is all real numbers except $x = 0$.

### 4. Methods and Techniques
- **Solving Exponential Equations:** If both sides can be written with the same base (e.g., $2^x = 2^3$), set the exponents equal. If not, take the natural logarithm (or logarithm of any convenient base) of both sides to bring the variable down from the exponent, e.g., $\ln(3^{2x}) = 2x \ln 3$.
- **Solving Logarithmic Equations:** Combine the logarithms using the logarithm laws to create a single logarithmic term, e.g., $\log_b A = \log_b B \implies A = B$. Alternatively, rewrite the logarithmic equation in exponential form: $\log_b x = y \implies b^y = x$. Check your final answers against the domain restrictions (arguments must be positive).
- **Simplifying Expressions with Hyperbolic Functions:** Use the definitions in terms of $e^x$ to simplify complex expressions. The hyperbolic identities (like $\cosh^2 x - \sinh^2 x = 1$) are used similarly to their trigonometric counterparts to simplify algebra.

### 5. Common Pitfalls
- **❌ Incorrectly applying logarithm laws to sums and differences.** $\ln(a+b)$ is NOT $\ln a + \ln b$. $\ln(a-b)$ is NOT $\ln a - \ln b$. The laws only apply to multiplication and division inside the logarithm argument.
- **❌ Forgetting the domain restriction $x > 0$ for logarithms.** You cannot take the logarithm of a negative number or zero. If you solve a logarithmic equation and get a negative result, it must be discarded as an extraneous solution.
- **❌ Misapplying the Power Law for negative arguments.** For example, $\ln(x^2) = 2\ln |x|$, not $2\ln x$. Since $x^2$ is always positive, its natural log is defined even for $x < 0$. Using the absolute value is the rigorous way to handle this.
- **❌ Assuming $a^{b^c} = (a^b)^c$.** These are different. $a^{b^c} = a^{(b^c)}$, while $(a^b)^c = a^{bc}$. Remember the exponential tower is evaluated from the top down.
- **❌ Confusing $\log_b 1 = 0$ with $\log_b 0 = 1$.** The logarithm of 1 to any base is 0 ($b^0=1$), but the logarithm of 0 is undefined ($b^x=0$ has no solution).

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The **CONCEPTUAL INSIGHT** that exponential growth is about multiplying by a fixed percentage each time step rather than adding a fixed amount is critical. For example, a power function like $x^3$ grows slower than $2^x$ for large $x$ because the exponential function multiplies by 2 at every integer, whereas $x^3$ just adds chunks based on the polynomial pattern. The laws of logarithms "convert" operations: they turn multiplication (hard to do in large numbers) into addition (easier), and exponentiation into multiplication. This property is what makes slide rules and logarithmic scales (like the Richter scale) useful. Finally, $e^x$ is special because its growth rate (derivative) is equal to its current amount, which models compound interest with continuous compounding or unrestricted population growth.

(b) **Visualization suggestions:**
- **Concept:** Exponential Growth vs. Power Growth.
  - **Component:** Exponential vs. Power Graph Visualizer.
  - **Parameters:** Sliders for a power function $y = x^n$ and an exponential function $y = a^x$. The user can adjust $n$ and the base $a$ ($a>1$). The component plots both on the same axes.
  - **Observation Expected:** User can set $a=1.1$ and $n=5$ and observe that for small $x$, the power function may be larger, but eventually the exponential function will "overtake" and dominate the power function, visually confirming the concept of rapid growth.
- **Concept:** Logarithmic Laws and Scale.
  - **Component:** Logarithmic Scale Explorer.
  - **Parameters:** A slider for a number $x$ from 1 to $1000$. Two number lines are displayed side-by-side. The top is a standard linear scale. The bottom is a logarithmic scale. The value $x$ is marked on both.
  - **Observation Expected:** User sees that equal distances on the logarithmic scale represent equal *ratios* (multiplication factors) rather than equal *differences*. This illustrates why logarithms "compress" large ranges of data, making them easier to visualize on a graph.

### 7. Concept Self-Check (original)
**Q1.** $\ln(8) = \ln(2) + \ln(4)$.
- Answer: True.
- Explanation: By the Product Law for logarithms, $\ln(2 \cdot 4) = \ln 2 + \ln 4$. Since $2 \cdot 4 = 8$, the statement is true.

**Q2.** The range of $f(x) = e^x$ is all real numbers.
- Answer: False.
- Explanation: The range of $e^x$ is $\{y \in \mathbb{R} \mid y > 0\}$. The function never outputs 0 or negative numbers. The *domain* is all real numbers.

**Q3.** $e^{\ln x} = x$ for all real numbers $x$.
- Answer: False.
- Explanation: This property holds only for $x > 0$, because the argument of the natural logarithm must be positive. The expression $\ln x$ is undefined for $x \le 0$.

**Q4.** The hyperbolic sine function, $\sinh x$, is an odd function.
- Answer: True.
- Explanation: $\sinh(-x) = \frac{e^{-x} - e^{x}}{2} = -\frac{e^{x} - e^{-x}}{2} = -\sinh x$. This satisfies the condition for an odd function.

**Q5.** $\log_{b}(b^5) = 5$ for any valid base $b$.
- Answer: True.
- Explanation: By definition, the logarithm "undoes" the exponential. Since $b^5$ asks "what is $b$ raised to the 5th power?", the answer to $\log_b(b^5)$ is simply 5.

---

## 1.7 Technology: Calculators and Computers

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Viewing rectangle | The rectangular region $[a, b] \times [c, d]$ defined by the range of $x$- and $y$-values displayed on a graphing calculator or computer screen. |
| Local linearity | The property of many functions where, when you zoom in closely enough on a point, the graph appears straight (like a line). |
| Numerical experiment | Using technology to calculate a sequence of values to guess the behavior of a function at a limit or to approximate roots. |

### 2. Why This Section Matters
Calculus is not just about symbolic manipulation; it relies heavily on numerical approximation and visual intuition. This section introduces the practical skills necessary for using technology to explore limits (Chapter 2), find roots and extrema (Chapter 4), and visualize the core concept of differentiability (local linearity). It prepares students to use computational tools to verify analytic results or handle functions that have no closed-form solution.

### 3. Core Cards

**Card 1: Finding Roots Graphically**
- Type: Method
- Statement: To find the roots of a function $f(x)$, graph the function and choose a viewing rectangle that displays the curve crossing the $x$-axis. By repeatedly zooming in on the crossing points, the root's $x$-coordinate can be approximated to the desired accuracy.
- Conditions / scope: The function must be continuous on the interval containing the root (see Chapter 2).
- Note: This method is useful when factoring is difficult or impossible.

**Card 2: Finding Intersections Graphically**
- Type: Method
- Statement: To solve an equation like $f(x) = g(x)$, plot both functions on the same axes and find their points of intersection. The $x$-coordinates of these points are the solutions to the equation. This also involves adjusting the viewing rectangle and zooming in.
- Conditions / scope: Both $f(x)$ and $g(x)$ must be defined and continuous on the interval of interest.
- Note: This is a primary method for solving complex equations where algebraic isolation is impossible.

**Card 3: Local Linearity**
- Type: Conceptual Principle
- Statement: Many functions are **locally linear**, meaning that if you zoom in sufficiently closely on a point on the function's graph (where it is differentiable), the curve gradually flattens out and appears to be a straight line.
- Conditions / scope: Applies to functions that are differentiable at the point of interest (a concept introduced in Chapter 3).
- Note: This visual observation is the foundation of the formal definition of the derivative in Chapter 3.

### 4. Methods and Techniques
- **Choosing a Viewing Rectangle:** There is no single "correct" viewing rectangle. You must experiment with different $x$- and $y$-ranges. Start with a "standard" window (e.g., $[-10, 10] \times [-10, 10]$) and adjust based on what you see. If the graph is cut off, enlarge the $y$-range. If you need more detail, zoom in on the feature of interest.
- **Performing Numerical Experiments:** Use a calculator to create a table of values for a function for progressively larger $n$ or $x$, or for $x$ approaching a specific value. Look for a pattern or a limit the values are approaching. This is called "numerical investigating" and is essential for understanding limits.
- **Illustrating Local Linearity:** Pick a point on a function. Zoom in repeatedly (using the calculator's zoom function) around this point. As the viewing rectangle becomes very small, the curve should straighten out into a line, demonstrating the concept of local linearity.

### 5. Common Pitfalls
- **❌ Assuming a graph is enough to prove a mathematical fact.** Graphical evidence is *strongly suggestive* but not a rigorous proof. For example, a graph might appear to reach a horizontal asymptote but actually continue to slowly increase (e.g., $y = \ln x$). Use graphs for intuition, but rely on analytic proofs for definitive conclusions.
- **❌ Failing to adjust the viewing rectangle enough.** If you don't see a feature you expect, it doesn't mean it doesn't exist; it might mean your viewing rectangle is too small or too large. The graph of $y = 12 - x - x^2$ in a wrong window might appear to be a vertical line.
- **❌ Confusing vertical asymptotes with the graph itself.** Graphing calculators sometimes draw a near-vertical line at the location of a vertical asymptote (a discontinuity). This line is not part of the function's graph. You must be aware of asymptotes from algebra to avoid misinterpreting the visual output.
- **❌ Assuming local linearity applies everywhere.** The property of local linearity only applies at points where the function is smooth. At points with sharp corners (like $f(x) = |x|$ at $x = 0$), zooming in will still show a corner, not a straight line. This visual distinction is a key observation for the definition of differentiability.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** Technology is a partner in learning calculus, not a replacement for understanding. The principle of **local linearity** is the visual bridge between algebra and calculus. As you zoom in on any smooth curve, it becomes indistinguishable from a straight line. This tells us that at a tiny scale, calculus deals with straight lines (slopes, tangent lines) to describe the behavior of curves. The practice of changing viewing rectangles teaches us that mathematical relationships are scale-dependent; sometimes you need to look at the big picture (macroscopic), and sometimes you need to zoom in to see the details (microscopic).

(b) **Visualization suggestions:**
- **Concept:** Local Linearity.
  - **Component:** Local Linearity Zoom Tool.
  - **Parameters:** A function $f(x)$ (e.g., $\sin x$, $x^2$, $\cos(x^2)$). A slider or click-drag to select a point $x=a$. The component provides a "magnifying glass" view where the user can click repeatedly to zoom in on the point $(a, f(a))$. As the zoom level increases, the curve segment inside the magnifying glass becomes a straight line.
  - **Observation Expected:** The user observes that regardless of the original curve's complexity, zooming in ultimately produces a straight line, demonstrating why calculus uses linear approximations for small intervals.
- **Concept:** Asymptote Visualization.
  - **Component:** Asymptote Viewer.
  - **Parameters:** A slider for a rational function (e.g., $y = \frac{1}{x-c}$). The graph is plotted, and vertical/horizontal dashed lines indicate asymptotes. A slider allows the user to change $c$, moving the vertical asymptote horizontally.
  - **Observation Expected:** The user observes that the graph approaches but never touches the dashed lines. This reinforces the analytic concept of a limit and shows how the calculator might draw a "fake" line at the discontinuity.

### 7. Concept Self-Check (original)
**Q1.** Local linearity implies that for any function, you can find a zoom level where its graph looks exactly like a horizontal line.
- Answer: False.
- Explanation: Local linearity means the graph looks like a *straight line* of some slope, not necessarily a horizontal line. Unless the tangent at that point has slope 0, the "line" will be tilted.

**Q2.** If a graphing calculator shows a graph approaching a horizontal line, the function has a horizontal asymptote.
- Answer: False.
- Explanation: The visual evidence is strongly suggestive, but without analytic proof (e.g., evaluating the limit as $x \to \infty$), you cannot be certain. Functions like $\ln x$ can fool a visual inspection over short viewing ranges because they grow very slowly.

**Q3.** To find the intersection of two functions, the most effective viewing rectangle should include the suspected $x$- and $y$-coordinates of the intersection.
- Answer: True.
- Explanation: You must ensure both functions are visible and their crossing point is inside the window to find the solution.

**Q4.** The graph of $y = \tan x$ has vertical asymptotes.
- Answer: True.
- Explanation: Since $\tan x = \frac{\sin x}{\cos x}$, the function is undefined when $\cos x = 0$ (at $x = \pi/2 + n\pi$), creating a vertical asymptote.

**Q5.** Changing the viewing rectangle changes the mathematical properties of the function being graphed.
- Answer: False.
- Explanation: The viewing rectangle changes the *scale* and the *portion of the graph* shown, but the underlying function's algebraic properties (domain, range, roots, asymptotes) remain unchanged.

---

## Part 3: Chapter Quick-Reference Sheet

## Chapter 1 Quick Reference

### 1.1 Real Numbers, Functions, and Graphs
- **Exponent Laws:** $b^0 = 1;\ b^x b^y = b^{x+y}; \frac{b^x}{b^y} = b^{x-y}; (b^x)^y = b^{xy}; b^{-x} = \frac{1}{b^x}; b^{1/n} = \sqrt[n]{b}$.
- **Absolute Value:** $|a| = a$ if $a \ge 0$; $|a| = -a$ if $a < 0$.
- **Triangle Inequality:** $|a+b| \le |a| + |b|$.
- **Distance Formula:** $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.
- **Circle Equation:** $(x-a)^2 + (y-b)^2 = r^2$ (center $(a,b)$, radius $r$).
- **Interval Notation with Absolute Values:** $|x-c| < r \iff x \in (c-r, c+r)$; $|x-c| \le r \iff x \in [c-r, c+r]$.
- **Even/Odd Functions:** $f(-x) = f(x)$ (even, symmetric about y-axis); $f(-x) = -f(x)$ (odd, symmetric about origin).
- **Graph Transformations:** $f(x)+c$ (vertical shift), $f(x+c)$ (horizontal shift, opposite sign), $k f(x)$ (vertical scale/reflection), $f(kx)$ (horizontal scale/reflection).

### 1.2 Linear and Quadratic Functions
- **Slope:** $m = \frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1}$.
- **Line Equations:** Slope-intercept $y = mx + b$; Point-slope $y - b = m(x-a)$; General linear $ax+by=c$.
- **Parallel/Perpendicular Lines:** Parallel if $m_1 = m_2$; Perpendicular if $m_1 m_2 = -1$.
- **Quadratic Function:** $f(x) = ax^2 + bx + c$.
- **Quadratic Formula:** $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.
- **Discriminant:** $D = b^2-4ac$ (If $D>0$: two real roots; $D=0$: one real root; $D<0$: no real roots).
- **Completing the Square:** Rewrites $ax^2+bx+c$ into vertex form $a(x-h)^2 + k$.

### 1.3 The Basic Classes of Functions
- **Polynomial:** Sum of multiples of non-negative integer powers of $x$; Domain $\mathbb{R}$.
- **Rational Function:** Quotient of two polynomials $P(x)/Q(x)$; Domain is $\mathbb{R}$ excluding roots of $Q(x)$.
- **Algebraic:** Built from polynomials and rationals via roots and arithmetic operations.
- **Transcendental:** Not algebraic (e.g., $e^x, \sin x, \ln x$).
- **Composition:** $(f \circ g)(x) = f(g(x))$; Domain of $f \circ g$ = $\{x \mid x \in \text{Dom}(g) \text{ and } g(x) \in \text{Dom}(f)\}$.
- **Piecewise functions:** Different algebraic formulas over different intervals of the domain.

### 1.4 Trigonometric Functions
- **Radian to Degree:** Multiply radians by $\frac{180}{\pi}$. **Degree to Radian:** Multiply degrees by $\frac{\pi}{180}$.
- **Unit Circle Definitions:** $\cos \theta = x$, $\sin \theta = y$.
- **Trigonometric Functions:** $\tan \theta = \frac{\sin \theta}{\cos \theta}$, $\sec \theta = \frac{1}{\cos \theta}$, $\csc \theta = \frac{1}{\sin \theta}$, $\cot \theta = \frac{\cos \theta}{\sin \theta}$.
- **Periodicity:** $\sin(\theta + 2\pi k) = \sin \theta$, $\cos(\theta + 2\pi k) = \cos \theta$, $\tan(\theta + \pi k) = \tan \theta$.
- **Parity:** $\sin(-\theta) = -\sin \theta$ (odd); $\cos(-\theta) = \cos \theta$ (even).
- **Pythagorean Identities:** $\sin^2 \theta + \cos^2 \theta = 1$, $\tan^2 \theta + 1 = \sec^2 \theta$, $1 + \cot^2 \theta = \csc^2 \theta$.
- **Addition Formulas:** $\sin(x+y) = \sin x \cos y + \cos x \sin y$; $\cos(x+y) = \cos x \cos y - \sin x \sin y$.
- **Double-Angle:** $\sin 2x = 2 \sin x \cos x$, $\cos 2x = \cos^2 x - \sin^2 x$.
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab \cos \theta$.

### 1.5 Inverse Functions
- **Definition:** $f^{-1}$ exists iff $f$ is one-to-one on its domain.
- **One-to-One Test:** $f(a) = f(b) \implies a = b$; Horizontal Line Test must pass.
- **Finding $f^{-1}$:** Solve $y=f(x)$ for $x$, then swap $x$ and $y$.
- **Inverse Graph:** Reflection of $f$ across the line $y=x$.
- **Inverse Trig Functions:**
  - $\sin^{-1} x$: Domain $[-1,1]$, Range $[-\pi/2, \pi/2]$.
  - $\cos^{-1} x$: Domain $[-1,1]$, Range $[0, \pi]$.
  - $\tan^{-1} x$: Domain $\mathbb{R}$, Range $(-\pi/2, \pi/2)$.
  - $\cot^{-1} x$: Domain $\mathbb{R}$, Range $(0, \pi)$.
  - $\sec^{-1} x$: Domain $|x| \ge 1$, Range $[0, \pi/2) \cup (\pi/2, \pi]$.
  - $\csc^{-1} x$: Domain $|x| \ge 1$, Range $[-\pi/2, 0) \cup (0, \pi/2]$.

### 1.6 Exponential and Logarithmic Functions
- **Exponential Function:** $f(x) = b^x$ ($b > 0, b \neq 1$).
- **Natural Exponential:** $y = e^x$ ($e \approx 2.718$).
- **Logarithm:** $y = \log_b x \iff b^y = x$. Domain $(0, \infty)$, Range $\mathbb{R}$.
- **Inverse Property:** $b^{\log_b x} = x$, $\log_b(b^x) = x$.
- **Natural Logarithm:** $\ln x = \log_e x$.
- **Logarithm Laws:** $\log_b(xy) = \log_b x + \log_b y$; $\log_b(x/y) = \log_b x - \log_b y$; $\log_b(x^n) = n \log_b x$.
- **Change of Base:** $\log_b x = \frac{\ln x}{\ln b}$; $b^x = e^{x \ln b}$.
- **Hyperbolic Functions:** $\sinh x = \frac{e^x - e^{-x}}{2}$ (odd); $\cosh x = \frac{e^x + e^{-x}}{2}$ (even).
- **Hyperbolic Identities:** $\cosh^2 x - \sinh^2 x = 1$.
- **Inverse Hyperbolic Functions:** $\sinh^{-1} x$ (Domain $\mathbb{R}$); $\cosh^{-1} x$ (Domain $x \ge 1$); $\tanh^{-1} x$ (Domain $|x| < 1$); $\coth^{-1} x$ (Domain $|x| > 1$); $\text{sech}^{-1} x$ (Domain $0 < x \le 1$); $\text{csch}^{-1} x$ (Domain $x \neq 0$).

### 1.7 Technology
- **Viewing Rectangle:** $[a,b] \times [c,d]$ defines the region of the graph shown.
- **Roots:** Use graphical zooming to approximate roots to the desired accuracy. Analysis is required for exact verification.
- **Intersections:** Graph $f(x)$ and $g(x)$; their intersections satisfy $f(x) = g(x)$.
- **Local Linearity:** Zooming in on a smooth curve eventually makes it appear as a straight line; this is the visual foundation for the derivative concept.
- **Vertical Asymptotes:** Be aware of graph discontinuities near asymptotes; the near-vertical line drawn by a calculator is not part of the function.
