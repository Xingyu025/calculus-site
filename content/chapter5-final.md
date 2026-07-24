# Chapter 5: Integration

## Part 0: Structural Element Inventory

### DEFINITION boxes
- [5.2] Definite Integral
- [5.2] Reversing the Limits of Integration
- [5.3] Antiderivatives
- [5.3] Notation: Indefinite Integral

### THEOREM boxes
- [5.1] Convergence of Endpoint and Midpoint Approximations
- [5.2] Integrability of Continuous Functions
- [5.2] Integral of a Constant
- [5.2] Linearity of the Definite Integral
- [5.2] Additivity for Adjacent Intervals
- [5.2] Comparison Theorem
- [5.3] The General Antiderivative
- [5.3] Power Rule for Integrals
- [5.3] Antiderivative of $y = \frac{1}{x}$
- [5.3] Linearity of the Indefinite Integral
- [5.4] The Fundamental Theorem of Calculus, Part I
- [5.5] The Fundamental Theorem of Calculus, Part II
- [5.6] Net Change as the Integral of a Rate of Change
- [5.6] The Integral of Velocity
- [5.7] The Substitution Method
- [5.7] Change of Variables Formula for Definite Integrals

### CAUTION notes
- none

### REMINDER notes
- [5.4] Antiderivative Notation / Definition
- [5.4] Power Rule for Integrals

### CONCEPTUAL INSIGHT boxes
- [5.1] Defining Area as a Limit
- [5.2] Definite Integral vs. Riemann Sums
- [5.3] Definite Versus Indefinite Integrals
- [5.4] A Tale of Two Graphs (Geometric Interpretation of FTC I)
- [5.4] Which Antiderivative?
- [5.5] Integration and Differentiation as Inverse Operations
- [5.5] Guaranteed Antiderivative via Area Function
- [5.7] Substitution Method Sensitivity

### GRAPHICAL INSIGHT boxes
- [5.1] Monotonic Functions and Bounds
- [5.3] Antiderivatives and Vertical Shifts
- [5.5] Another Tale of Two Graphs (Interpreting $A'$)


## Sections in This Chapter
- 5.1 Approximating and Computing Area
- 5.2 The Definite Integral
- 5.3 The Indefinite Integral
- 5.4 The Fundamental Theorem of Calculus, Part I
- 5.5 The Fundamental Theorem of Calculus, Part II
- 5.6 Net Change as the Integral of a Rate of Change
- 5.7 The Substitution Method
- 5.8 Further Integral Formulas

## Knowledge Dependencies
- **5.1 [Approximating Area]** → builds the conceptual foundation for **5.2 [Definite Integral]** and justifies the definition of the integral.
- **5.2 [Definite Integral]** → introduced as a numerical limit; fundamental for the FTC in **5.4**.
- **5.3 [Indefinite Integral]** → provides the computational tool (antiderivatives) required by **5.4 [FTC I]**.
- **5.4 [FTC I]** → enables effortless evaluation of definite integrals; used heavily in **5.6 [Net Change]**, **5.7 [Substitution Method]**, and **5.8 [Further Integral Formulas]**.
- **5.5 [FTC II]** → demonstrates that differentiation and integration are inverse operations; used to understand antiderivatives as area functions.
- **5.6 [Net Change]** → direct application of **5.4 [FTC I]** to physics, economics, and fluid dynamics.
- **5.7 [Substitution Method]** → uses **5.3 [Indefinite Integral]** and the chain rule to extend the class of functions we can integrate.
- **5.8 [Further Integral Formulas]** → builds upon **5.3** and **5.7** to add specific inverse trigonometric and exponential formulas to the integration toolbox.
- **FTC I (5.4) [Fundamental Theorem of Calculus I]** → considered the most pivotal result in this chapter and is used repeatedly in every subsequent section for evaluation.
- **FTC II (5.5) [Fundamental Theorem of Calculus II]** → critical for understanding how to construct antiderivatives of functions that cannot be expressed via elementary methods, and for differentiating variable-limit integrals.

---
## Part 2: Section-by-Section Content

## 5.1 Approximating and Computing Area

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Right-endpoint approximation ($R_N$) | An estimate of area using $N$ rectangles whose heights are determined by the function value at the right endpoint of each subinterval. |
| Left-endpoint approximation ($L_N$) | An estimate of area using $N$ rectangles whose heights are determined by the function value at the left endpoint of each subinterval. |
| Midpoint approximation ($M_N$) | An estimate of area using $N$ rectangles whose heights are determined by the function value at the midpoint of each subinterval. |
| Subinterval width ($\Delta x$) | The width of each equally sized piece when partitioning an interval $[a,b]$ into $N$ sections. |
| Summation notation ($\sum$) | A compact mathematical shorthand used to represent the sum of a sequence of terms. |
| Power sums | Formulas that provide explicit values for the sum of the first $N$ integers raised to a fixed power. |
| Area as a limit | The exact area under a curve is defined as the limit of the rectangle approximations as the number of rectangles tends to infinity. |

### 2. Why This Section Matters
This section introduces the primary motivation for the definite integral: finding the area under a curve. It establishes a two-step process—approximating with rectangles and then taking a limit—that defines the integral rigorously. This foundational approach is mirrored in the definition of the derivative and serves as a scaffold for understanding both the geometric and analytic meaning of the integral.

### 3. Core Cards

**Card 1: Right-Endpoint Approximation**
- **Type:** Formula
- **Statement:** To estimate the area under $f(x)$ on $[a,b]$, divide the interval into $N$ subintervals of equal width $\Delta x = \frac{b-a}{N}$. The right-endpoint approximation is
  $$
  R_N = \Delta x \sum_{j=1}^{N} f(x_j)
  $$
  where $x_j = a + j \Delta x$ are the right endpoints.
- **Conditions / scope:** Valid when $f(x)$ is continuous on $[a,b]$ and $\Delta x$ is constant.
- **Note:** The sum of the areas of rectangles drawn with their top-right corner touching the graph of $f$.

**Card 2: Summation Notation**
- **Type:** Definition
- **Statement:** The sum of the sequence $a_m, a_{m+1}, ..., a_n$ is denoted as:
  $$
  \sum_{j=m}^{n} a_j = a_m + a_{m+1} + \cdots + a_n
  $$
- **Conditions / scope:** The index $j$ runs from the lower limit $m$ to the upper limit $n$. The summation index is a "dummy variable."
- **Note:** Summations are linear, meaning they can be split and constants can be factored out.

**Card 3: Power Sums**
- **Type:** Formula
- **Statement:** The sums of the first $N$ positive integers, their squares, and their cubes are given by:
  $$
  \sum_{j=1}^{N} j = \frac{N(N+1)}{2}
  $$
  $$
  \sum_{j=1}^{N} j^2 = \frac{N(N+1)(2N+1)}{6}
  $$
  $$
  \sum_{j=1}^{N} j^3 = \frac{N^2(N+1)^2}{4}
  $$
- **Conditions / scope:** These formulas apply for positive integer $N$.
- **Note:** These are essential tools for evaluating the limit of a rectangle approximation analytically for polynomial functions.

**Card 4: Left and Midpoint Approximations**
- **Type:** Formula
- **Statement:** For $N$ equal subintervals, the left-endpoint and midpoint approximations are defined as:
  $$
  L_N = \Delta x \sum_{j=0}^{N-1} f(x_j)
  $$
  $$
  M_N = \Delta x \sum_{j=0}^{N-1} f\left(\frac{x_j + x_{j+1}}{2}\right)
  $$
- **Conditions / scope:** The left endpoint sum runs from $j=0$ to $j=N-1$.
- **Note:** For increasing functions, $L_N$ underestimates the area while $R_N$ overestimates it (and vice versa for decreasing functions).

**Card 5: Area as the Limit of Approximations**
- **Type:** Theorem / Definition
- **Statement:** If $f$ is continuous on $[a,b]$, then the endpoint and midpoint approximations all approach the same limit $L$ as $N \to \infty$:
  $$
  \lim_{N\to\infty} R_N = \lim_{N\to\infty} L_N = \lim_{N\to\infty} M_N = L
  $$
  If $f(x) \ge 0$ on $[a,b]$, the **area** under the graph over $[a,b]$ is defined to be this limit $L$.
- **Conditions / scope:** Requires $f(x)$ to be continuous on the closed interval $[a,b]$. If $f(x)$ takes negative values, the limit represents a "signed area."
- **Note:** This definition mirrors how the derivative is defined as a limit of secant slopes.

### 4. Methods and Techniques
**Method 1: Calculating $R_N$ with Power Sums**
- **When to use:** When you need an exact formula for the area under a polynomial function, allowing you to take the limit as $N \to \infty$.
- **Steps:**
  1.  Determine $\Delta x$ and the general expression for the right endpoint $x_j = a + j\Delta x$.
  2.  Write the sum $R_N = \Delta x \sum_{j=1}^N f(x_j)$.
  3.  Expand and simplify the function evaluation $f(x_j)$ to express it in terms of powers of $j$.
  4.  Use linearity to split the summation and factor out constants.
  5.  Substitute the power sum formulas for $\sum j$, $\sum j^2$, etc.
  6.  Simplify the resulting expression and take the limit $\lim_{N \to \infty} R_N$ to find the exact area.

**Method 2: Approximating Area Using Geometry**
- **When to use:** For simple geometric shapes (triangles, circles, rectangles) to quickly find an exact area without taking a limit.
- **Steps:** Identify the geometric shape described by the function over the interval and apply standard area formulas.

### 5. Common Pitfalls
- ❌ Ignoring the width $\Delta x$ when summing rectangle areas. → ✅ Remember to multiply the sum of the heights by the subinterval width $\Delta x = (b-a)/N$.
- ❌ Writing the summation limits incorrectly ($j=0$ vs. $j=1$). → ✅ $R_N$ runs from $1$ to $N$; $L_N$ runs from $0$ to $N-1$. Always confirm whether the function is evaluated at the start or the end of the subinterval.
- ❌ Assuming the $N$th right-endpoint approximation overestimates the area for any function. → ✅ For monotonically decreasing functions, the right-endpoint rectangles actually *underestimate* the area under the curve.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The text notes that limits allow us to define fundamental quantities (like area) that previously had no rigorous meaning. This is analogous to defining the slope of a tangent line as the limit of slopes of secant lines. The central idea is that we are using finite approximations that we can calculate algebraically and then treating the exact value as the endpoint of a sequence of these approximations.
**(b) Visualization suggestions:**
- **Interactive Endpoint/Midpoint Approximations:** A component that plots a function $y=f(x)$ and allows the user to control the number of rectangles $N$. Users should be able to switch between Left, Right, and Midpoint approximations and observe how the shading difference (error) shrinks as $N$ increases.
- **Monotonic Function Explorer:** Visual demonstration showing how $L_N$ and $R_N$ change relative to the true area (represented by a shaded curve) depending on whether the function is increasing or decreasing.

### 7. Concept Self-Check (original)
**Q1.** Does $R_N$ always provide an overestimate of the area under a curve?
- **Answer:** No.
- **Explanation:** $R_N$ only overestimates the area if the function is increasing on the interval. For a decreasing function, $R_N$ underestimates the area, and for an arbitrary function, there is no guaranteed bound.

**Q2.** If you want to approximate the area under $y = x^2$ from $x=0$ to $x=2$ with 4 rectangles, what is the width of each subinterval?
- **Answer:** $0.5$.
- **Explanation:** The subinterval width is $\Delta x = \frac{b-a}{N} = \frac{2-0}{4} = 0.5$.

**Q3.** When writing a summation in sigma notation, can the index be renamed?
- **Answer:** Yes.
- **Explanation:** The index is a "dummy variable"; replacing $j$ with $k$ (for example) does not change the value of the sum.

**Q4.** True or False: The area under a positive function $f$ over $[a,b]$ is a number that is always greater than $R_N$ for any $N$.
- **Answer:** False.
- **Explanation:** While $R_N$ approximates the true area, it can be an underestimate if the function is decreasing. For example, with $f(x) = 1/x$ on $[2,4]$, the right-endpoint rectangles lie below the graph.

**Q5.** What is the conceptual reason we take the limit as $N \to \infty$?
- **Answer:** Taking the limit eliminates the approximation error caused by the gaps between the rectangles and the curve, yielding the exact mathematical area.

---

## 5.2 The Definite Integral

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Riemann sum | A generalized sum of rectangle areas based on any partition and any set of sample points chosen from each subinterval. |
| Partition ($P$) | A set of points that divides an interval $[a,b]$ into $N$ subintervals, which may have unequal widths. |
| Norm of a partition ($\|P\|$) | The width of the largest subinterval in a given partition. |
| Definite integral | The exact limit of Riemann sums as the norm of the partition approaches zero. |
| Integrable | A property of a function meaning that the limit of its Riemann sums over a given interval exists. |
| Signed area | Area below the $x$-axis counted as negative, area above the $x$-axis counted as positive. |
| Limits of integration | The lower endpoint $a$ and upper endpoint $b$ of the interval over which the definite integral is evaluated. |
| Integrand | The function $f(x)$ being integrated. |
| Dummy variable | The variable of integration in a definite integral (e.g., $x$, $t$, or $u$) which does not affect the final numerical result. |

### 2. Why This Section Matters
This section formalizes the concepts introduced in 5.1. It moves from rectangles of equal width to Riemann sums based on arbitrary partitions and sample points, providing the rigorous definition of the definite integral. It also introduces the signed area interpretation of the integral and the fundamental properties (linearity, additivity, comparison) that are essential for solving complex problems in later sections.

### 3. Core Cards

**Card 1: Riemann Sum**
- **Type:** Definition
- **Statement:** Given a partition $P: a = x_0 < x_1 < \ldots < x_N = b$ and a set of sample points $C = \{c_1, \ldots, c_N\}$ where $c_i \in [x_{i-1}, x_i]$, the Riemann sum of $f$ is:
  $$
  R(f, P, C) = \sum_{i=1}^{N} f(c_i) \Delta x_i
  $$
  where $\Delta x_i = x_i - x_{i-1}$.
- **Conditions / scope:** $f$ must be defined on $[a,b]$.
- **Note:** $R_N, L_N,$ and $M_N$ are specific instances of Riemann sums where the subinterval widths are equal.

**Card 2: Definite Integral**
- **Type:** Definition
- **Statement:** The definite integral of $f$ over $[a,b]$ is the limit of Riemann sums as the norm of the partition $\|P\|$ (the largest subinterval width) tends to zero:
  $$
  \int_{a}^{b} f(x) dx = \lim_{\|P\| \to 0} \sum_{i=1}^{N} f(c_i) \Delta x_i
  $$
- **Conditions / scope:** This limit must be independent of the choices of partition and sample points.
- **Note:** If the limit exists, we say $f$ is **integrable** on $[a,b]$. The symbol $\int$ was derived from the elongated "s" for "summa."

**Card 3: Integral of a Constant**
- **Type:** Theorem
- **Statement:** For any constant function $f(x) = K$:
  $$
  \int_{a}^{b} K dx = K(b - a)
  $$
- **Conditions / scope:** $K$ is a constant.
- **Note:** Geometrically, this represents the area of a rectangle with height $K$ and width $b-a$.

**Card 4: Signed Area**
- **Type:** Definition
- **Statement:** For a function $f(x)$ that takes both positive and negative values, the definite integral $\int_{a}^{b} f(x) dx$ represents the **signed area** between the graph and the $x$-axis. Areas above the $x$-axis are positive, and areas below are negative.
- **Conditions / scope:** $f$ must be integrable over $[a,b]$.
- **Note:** To find the total (positive) geometric area between the curve and the $x$-axis, one must integrate the absolute value $|f(x)|$.

**Card 5: Linearity of the Definite Integral**
- **Type:** Theorem
- **Statement:** The definite integral is a linear operator:
  $$
  \int_{a}^{b} (f(x) + g(x)) dx = \int_{a}^{b} f(x) dx + \int_{a}^{b} g(x) dx
  $$
  $$
  \int_{a}^{b} C f(x) dx = C \int_{a}^{b} f(x) dx \quad \text{(for any constant } C\text{)}
  $$
- **Conditions / scope:** $f$ and $g$ must be integrable on $[a,b]$.
- **Note:** This property allows us to split integrals of sums into sums of integrals and factor constants outside the integral.

**Card 6: Additivity for Adjacent Intervals**
- **Type:** Theorem
- **Statement:** For an integrable function and any $a \le b \le c$:
  $$
  \int_{a}^{c} f(x) dx = \int_{a}^{b} f(x) dx + \int_{b}^{c} f(x) dx
  $$
- **Conditions / scope:** $f$ is integrable on the intervals.
- **Note:** This allows us to compute definite integrals by splitting the interval into manageable pieces or to integrate over intervals with a discontinuity.

**Card 7: Comparison Theorem**
- **Type:** Theorem
- **Statement:** If $f$ and $g$ are integrable and $g(x) \le f(x)$ for all $x$ in $[a,b]$, then:
  $$
  \int_{a}^{b} g(x) dx \le \int_{a}^{b} f(x) dx
  $$
- **Conditions / scope:** Assumes $a < b$.
- **Note:** Provides a way to bound an integral when the exact value is unknown or difficult to compute.

**Card 8: Reversing the Limits of Integration**
- **Type:** Definition
- **Statement:** For $a < b$:
  $$
  \int_{b}^{a} f(x) dx = -\int_{a}^{b} f(x) dx
  $$
  And by extension, $\int_{a}^{a} f(x) dx = 0$.
- **Conditions / scope:** $f$ is integrable.
- **Note:** This definition extends the properties of the integral and forces consistency with the additivity property.

### 4. Methods and Techniques
**Method 1: Evaluating Definite Integrals Using Geometry**
- **When to use:** When the region between the function and the $x$-axis forms standard geometric shapes (e.g., rectangles, triangles, semicircles).
- **Steps:** Sketch the graph of the function, decompose the region into standard geometric shapes, calculate the signed area of each part, and sum them up (remembering to subtract areas below the $x$-axis).

**Method 2: Using the Limit Definition of the Definite Integral**
- **When to use:** When the geometry is not simple, you may need to rely on the direct limit definition to find the exact value.
- **Steps:** Construct a Riemann sum (e.g., $R_N$) and calculate its value as a function of $N$. Evaluate the limit $\lim_{N \to \infty} R_N$.

### 5. Common Pitfalls
- ❌ Assuming the definite integral always calculates the physical area regardless of the function's sign. → ✅ The definite integral computes *signed area*; if the function crosses the $x$-axis, contributions below the axis are negative.
- ❌ Ignoring the order of limits when reversing the interval. → ✅ If you flip the upper and lower limits, you must introduce a negative sign (e.g., $\int_{5}^{0} = -\int_{0}^{5}$).
- ❌ Identifying the integration variable as important to the result. → ✅ The variable in a definite integral is a *dummy variable*; $\int_{a}^{b} f(x) dx$ and $\int_{a}^{b} f(t) dt$ represent the same numerical value.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The conceptual insight emphasizes the distinction between the definition of the integral as a limit of Riemann sums and its application. The properties of the integral (linearity, additivity, comparison) are proven from this limit definition, providing both theoretical insight and computational tools. The most significant computational tool mentioned is FTC I, introduced in Section 5.4.
**(b) Visualization suggestions:**
- **Signed Area Demo:** An interactive graph allowing the user to draw a function and see the "positive area" represented as one color and the "negative area" as another, with the definite integral displaying the net signed sum.
- **Riemann Sum Explorer with Custom Partitions:** A tool where the user can manually set the placement of grid lines (partition points) and sample points (left, right, midpoint, or arbitrary point within each subinterval) to see how the Riemann sum behaves as the norm shrinks.

### 7. Concept Self-Check (original)
**Q1.** Is the definite integral $\int_{-1}^{1} x^3 dx$ positive, negative, or zero?
- **Answer:** Zero.
- **Explanation:** The function $f(x) = x^3$ is an odd function, and the interval $[-1,1]$ is symmetric about the origin. The positive and negative signed areas cancel each other out exactly.

**Q2.** True or False: If $\int_{a}^{b} f(x) dx$ is negative, then $f(x)$ must be negative for all $x$ in $[a,b]$.
- **Answer:** False.
- **Explanation:** The integral is a *signed area*. A negative result only means the negative area below the $x$-axis outweighed the positive area above it. The function could still have positive values on parts of the interval.

**Q3.** If $\int_{1}^{5} f(x) dx = 10$ and $\int_{3}^{5} f(x) dx = 4$, what is $\int_{1}^{3} f(x) dx$?
- **Answer:** $6$.
- **Explanation:** According to the Additivity property, $\int_{1}^{5} f(x) dx = \int_{1}^{3} f(x) dx + \int_{3}^{5} f(x) dx$, so $10 = \int_{1}^{3} f(x) dx + 4$, meaning $\int_{1}^{3} f(x) dx = 6$.

**Q4.** What is the primary difference between a Riemann sum and a definite integral?
- **Answer:** A Riemann sum is an approximation (a finite sum), while the definite integral is the exact limit of those sums as the partition becomes infinitely fine.
- **Explanation:** The $R_N$ are Riemann sums; the definite integral is the limit of those sums as the width of the largest rectangle approaches zero.

**Q5.** True or False: The phrase "norm of the partition" refers to the number of subintervals in the partition.
- **Answer:** False.
- **Explanation:** The norm refers to the *width of the widest subinterval*. As the norm approaches 0, all subinterval widths are forced to 0, ensuring the number of subintervals tends to infinity.

---

## 5.3 The Indefinite Integral

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Antiderivative | A function $F(x)$ whose derivative is equal to a given function $f(x)$. |
| Indefinite integral | The family of all antiderivatives of a function $f(x)$, denoted $\int f(x) dx$. |
| Constant of integration ($C$) | The arbitrary constant added to an antiderivative to represent the entire family of solutions. |
| Power Rule for Integrals | A formula for finding the antiderivative of $x^n$ for $n \neq -1$. |
| Initial condition | A specific value of a function at a specific input used to solve for the constant $C$. |
| Initial value problem | A differential equation combined with an initial condition to find a particular solution. |

### 2. Why This Section Matters
This section addresses the inverse problem of differentiation: finding a function whose derivative is known. It introduces antiderivatives and the indefinite integral, which are the core computational tools needed to evaluate definite integrals via the Fundamental Theorem of Calculus in the next sections. This concept is vital in physics (finding velocity from acceleration) and economics (finding total cost from marginal cost).

### 3. Core Cards

**Card 1: Antiderivative**
- **Type:** Definition
- **Statement:** A function $F$ is an **antiderivative** of $f$ on an open interval $(a,b)$ if:
  $$
  F'(x) = f(x)
  $$
  for all $x$ in $(a,b)$.
- **Conditions / scope:** $F$ must be differentiable on $(a,b)$ with $F'(x) = f(x)$; no differentiability assumption on $f$ itself is needed.
- **Note:** Antiderivatives are not unique.

**Card 2: The General Antiderivative**
- **Type:** Theorem
- **Statement:** If $F(x)$ is one antiderivative of $f(x)$ on an interval, then *every* antiderivative of $f$ on that interval is of the form:
  $$
  F(x) + C
  $$
  where $C$ is an arbitrary constant.
- **Conditions / scope:** Valid on an open interval where $f$ is defined.
- **Note:** This is a direct consequence of the Mean Value Theorem. The constant $C$ represents a vertical translation of the graph of $F$.

**Card 3: Indefinite Integral Notation**
- **Type:** Definition
- **Statement:** The notation $\int f(x) dx = F(x) + C$ indicates that $F'(x) = f(x)$. It represents the **general antiderivative** or indefinite integral of $f$.
- **Conditions / scope:** $F$ is an antiderivative, and $C$ is the constant of integration.
- **Note:** The $dx$ indicates the variable of integration. The indefinite integral is a family of functions, unlike the definite integral which is a numerical value.

**Card 4: Power Rule for Integrals**
- **Type:** Theorem
- **Statement:** For $n \neq -1$:
  $$
  \int x^n dx = \frac{x^{n+1}}{n+1} + C
  $$
- **Conditions / scope:** $n$ is any real number except $-1$.
- **Note:** Remember to "increase the power by one and divide by the new power."

**Card 5: Antiderivative of $\frac{1}{x}$**
- **Type:** Theorem
- **Statement:** For all $x \neq 0$:
  $$
  \int \frac{1}{x} dx = \ln |x| + C
  $$
- **Conditions / scope:** Valid on any interval that does not contain $0$.
- **Note:** The absolute value $\ln|x|$ ensures the function is defined for negative $x$ as well, making it an antiderivative on the full domain $x \neq 0$.

**Card 6: Linearity of the Indefinite Integral**
- **Type:** Theorem
- **Statement:**
  $$
  \int (f(x) + g(x)) dx = \int f(x) dx + \int g(x) dx
  $$
  $$
  \int c f(x) dx = c \int f(x) dx \quad (c \text{ is a constant})
  $$
- **Conditions / scope:** $f$ and $g$ are continuous functions.
- **Note:** These rules allow us to integrate polynomials and sums of functions term-by-term.

**Card 7: Basic Trigonometric Integrals**
- **Type:** Formula
- **Statement:**
  $$
  \int \sin x dx = -\cos x + C
  $$
  $$
  \int \cos x dx = \sin x + C
  $$
  $$
  \int \sec^2 x dx = \tan x + C
  $$
  $$
  \int \csc^2 x dx = -\cot x + C
  $$
  $$
  \int \sec x \tan x dx = \sec x + C
  $$
  $$
  \int \csc x \cot x dx = -\csc x + C
  $$
- **Conditions / scope:** These follow directly from the corresponding derivative formulas.
- **Note:** These should be memorized as they form the foundation for more advanced trig integration.

**Card 8: Integrals Involving $e^x$**
- **Type:** Formula
- **Statement:**
  $$
  \int e^x dx = e^x + C
  $$
  $$
  \int e^{kx} dx = \frac{1}{k} e^{kx} + C \quad (k \neq 0)
  $$
- **Conditions / scope:** $k$ is a constant.
- **Note:** The exponential function is its own antiderivative as well as its own derivative.

### 4. Methods and Techniques
**Method 1: Evaluating Indefinite Integrals (Antidifferentiation)**
- **When to use:** When you are asked to find the function whose derivative is given.
- **Steps:**
  1.  Identify the form of the integrand (power rule, trigonometric, exponential).
  2.  Apply the linearity properties to split the sum and factor out constants.
  3.  Apply the Power Rule or known formulas to each term.
  4.  **Add the constant of integration $+C$**.

**Method 2: Solving an Initial Value Problem**
- **When to use:** When you need to find a *specific* antiderivative that passes through a known point (e.g., initial position, initial velocity, or a value like $y(0)=4$).
- **Steps:**
  1.  Find the general antiderivative $F(x) + C$.
  2.  Substitute the initial condition values (e.g., $x_0, y_0$) into the equation to form an algebraic equation: $y_0 = F(x_0) + C$.
  3.  Solve for $C$.
  4.  Write the particular solution.

### 5. Common Pitfalls
- ❌ Forgetting to add the constant of integration $+C$ to an indefinite integral. → ✅ The constant represents the infinite family of possible solutions. Its absence generally represents an incorrect answer.
- ❌ Mistaking the indefinite integral for the definite integral. → ✅ The definite integral $\int_a^b f(x)dx$ is a number; the indefinite integral $\int f(x) dx$ is a family of functions (antiderivatives). They are very different mathematical objects.
- ❌ Assuming rules for derivatives (product, quotient, chain rules) apply to integration. → ✅ There is no product rule or quotient rule for integration; those techniques require special methods like substitution (Section 5.7) or integration by parts.
- ❌ Using the Power Rule $\int x^n dx = x^{n+1}/(n+1)$ for $n = -1$. → ✅ For $n=-1$, the correct antiderivative is $\int x^{-1} dx = \ln|x| + C$.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The text highlights that vertical shifts of a function's graph do not change its slope. Antiderivatives are parallel families of curves (vertical shifts of one another) determined by the arbitrary constant $C$. The initial condition selects one particular curve from this family.
**(b) Visualization suggestions:**
- **Antiderivative Slider:** A graph showing a function $f(x)$, and a draggable slider that vertically shifts the antiderivative $F(x) + C$, with an input field to set the initial condition $F(a)=b$.

### 7. Concept Self-Check (original)
**Q1.** What is the general antiderivative of $f(x) = 0$?
- **Answer:** $F(x) = C$ (any constant).
- **Explanation:** The derivative of any constant is zero, making any constant a valid antiderivative.

**Q2.** True or False: If two functions $f$ and $g$ have the same derivative, then $f(x) = g(x)$.
- **Answer:** False.
- **Explanation:** If $f$ and $g$ have the same derivative on an interval, they must be related by a constant on that interval, so $f(x) = g(x) + C$.

**Q3.** If $F'(x) = f(x)$ and $G'(x) = g(x)$, is $F(x)G(x)$ an antiderivative of $f(x)g(x)$?
- **Answer:** No.
- **Explanation:** The derivative of $F(x)G(x)$ is $F(x)g(x) + G(x)f(x)$ (Product Rule). There is no "Product Rule" for antiderivatives.

**Q4.** What is the purpose of the constant $+C$ in an indefinite integral?
- **Answer:** It accounts for all possible antiderivatives of the integrand.
- **Explanation:** Since the derivative of a constant is zero, adding any constant to an antiderivative yields another valid antiderivative. The constant represents the entire family of solutions.

**Q5.** How do you solve the differential equation $dy/dx = e^x$?
- **Answer:** $y = e^x + C$.
- **Explanation:** Finding the solution to the differential equation $dy/dx = f(x)$ is equivalent to finding the general antiderivative of $f(x)$.

---

## 5.4 The Fundamental Theorem of Calculus, Part I

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Fundamental Theorem of Calculus, Part I | A theorem that connects the definite integral to the antiderivative, providing a simple method for evaluating definite integrals. |
| Antiderivative evaluation | The process of substituting the upper and lower limits into the antiderivative function and subtracting. |

### 2. Why This Section Matters
This section presents the single most important theorem in calculus. The Fundamental Theorem of Calculus, Part I (FTC I), bridges the gap between the concept of the derivative and the concept of the integral. It transforms the difficult task of evaluating limits of Riemann sums into a straightforward algebraic process of finding an antiderivative and subtracting values. This theorem is the engine behind almost all practical computations of definite integrals.

### 3. Core Cards

**Card 1: The Fundamental Theorem of Calculus, Part I (FTC I)**
- **Type:** Theorem
- **Statement:** Assume that $a < b$ and that $f$ is continuous on $[a,b]$. If $F$ is an antiderivative of $f$ on $[a,b]$, then:
  $$
  \int_{a}^{b} f(x) dx = F(b) - F(a)
  $$
- **Conditions / scope:** $f$ must be continuous on the closed interval $[a,b]$. $F$ must be an antiderivative of $f$. The theorem also holds for $b < a$ or $a = b$ with appropriate interpretations.
- **Note:** This is frequently written using the evaluation notation $F(x)\big|_{a}^{b} = F(b) - F(a)$.

**Card 2: Which Antiderivative?**
- **Type:** Conceptual Insight
- **Statement:** The choice of which antiderivative to use for FTC I is irrelevant. Since $F(x)$ and $G(x) = F(x) + C$ are both antiderivatives, the constant of integration $C$ cancels out when evaluating the difference $F(b) - F(a)$.
- **Conditions / scope:** $F$ and $G$ are both valid antiderivatives on $[a,b]$.
- **Note:** This justifies why one can ignore the $+C$ when performing definite integration via FTC I.

### 4. Methods and Techniques
**Method 1: Evaluating a Definite Integral using FTC I**
- **When to use:** Whenever you have an integrand for which you can find an antiderivative.
- **Steps:**
  1.  Ignore the limits for a moment and find the general indefinite integral (antiderivative) $F(x) + C$.
  2.  Write the definite integral as $F(x) \big|_{a}^{b}$.
  3.  Evaluate the antiderivative at the upper limit $b$ and the lower limit $a$.
  4.  Subtract the lower limit value from the upper limit value: $F(b) - F(a)$.
  5.  The constant $C$ from step 1 is not needed and can be omitted.

**Method 2: Handling Discontinuities**
- **When to use:** If the function has a discontinuity (e.g., a jump or vertical asymptote) within the interval $[a,b]$.
- **Steps:** Use the additivity property to split the integral at the discontinuity. Evaluate the integral on the continuous subintervals, being careful to note if any integrals are improper (infinite), which will be covered later in calculus.

### 5. Common Pitfalls
- ❌ Attempting to use FTC I on a function that is not continuous or integrable on the closed interval $[a,b]$. → ✅ Verify continuity. If there is a discontinuity, you need to split the integral and handle the piecewise nature (or wait for techniques for improper integrals).
- ❌ Writing the antiderivative correctly but evaluating it in the wrong order. → ✅ The standard notation is $\int_{a}^{b} f(x) dx = F(x) \big|_{a}^{b} = F(b) - F(a)$. The upper limit is evaluated first; the lower limit is subtracted from it.
- ❌ Carrying the $C$ constant through the evaluation and subtracting it out. → ✅ It is more efficient and less error-prone to omit the $+C$ when computing a definite integral via FTC I, as you know it will cancel out. Just use a specific antiderivative.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The text provides a "Tale of Two Graphs" insight: The total change $F(b) - F(a)$ in the antiderivative is the sum of small changes $F(x_i) - F(x_{i-1})$. The MVT shows each small change is approximately $f(c_i^*) \Delta x_i$, which is the signed area of a thin rectangle under the graph of $f$. Taking the limit transforms this sum into the definite integral. Thus, the theorem directly connects the "total change" in the antiderivative to the "area under the graph" of the original function.
**(b) Visualization suggestions:**
- **FTC I Interactive:** Show a graph with two windows. The left window shows the area under $f(x)$ (shaded). The right window shows the net change in an antiderivative $F(x)$ in the y-direction. When a slider for $b$ is moved, both the shaded area and the vertical distance $F(b)-F(a)$ update in sync, demonstrating the equality.

### 7. Concept Self-Check (original)
**Q1.** If $F'(x) = f(x)$ and $\int_{1}^{4} f(x) dx = 12$, what is $F(4) - F(1)$?
- **Answer:** 12.
- **Explanation:** FTC I states that the definite integral is equal to the difference of the antiderivative evaluated at the endpoints.

**Q2.** True or False: $\int_{0}^{2} \frac{1}{x} dx$ can be evaluated directly using FTC I.
- **Answer:** False.
- **Explanation:** The function $f(x) = 1/x$ is not continuous on the interval $[0,2]$ because it has a vertical asymptote at $x=0$. The continuity condition for FTC I is not met.

**Q3.** When evaluating $\int_{a}^{b} f(x) dx$ with FTC I, does it matter which antiderivative $F(x)$ you choose?
- **Answer:** No.
- **Explanation:** All antiderivatives differ by a constant $C$, and $C - C = 0$ when taking the difference $F(b) - F(a)$.

**Q4.** Calculate $\int_{0}^{2} 3x^2 dx$ without doing a Riemann sum.
- **Answer:** $8$.
- **Explanation:** The antiderivative of $3x^2$ is $x^3$. Applying FTC I: $x^3 \big|_{0}^{2} = 2^3 - 0^3 = 8$.

**Q5.** What is the main practical advantage of FTC I over the definition of the definite integral?
- **Answer:** FTC I allows us to compute exact values without performing the difficult limit of an infinite Riemann sum.
- **Explanation:** Instead of calculating a limit of sums, we simply perform antidifferentiation and evaluate.

---

## 5.5 The Fundamental Theorem of Calculus, Part II

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Area function ($A(x)$) | A function defined as a definite integral with a variable upper limit: $A(x) = \int_{a}^{x} f(t) dt$. |
| Variable limit of integration | The upper (or lower) limit of a definite integral that is treated as a variable, making the integral itself a function. |
| Fundamental Theorem of Calculus, Part II | A theorem stating that the derivative of an area function is the original integrand. |

### 2. Why This Section Matters
This section is the second half of the Fundamental Theorem of Calculus. It asserts that integration and differentiation are inverse operations. This fact is not just a theoretical curiosity; it allows us to define antiderivatives for functions that are impossible to express in elementary terms, through the use of area functions. It also provides a powerful method to take derivatives of integrals with variable limits.

### 3. Core Cards

**Card 1: The Fundamental Theorem of Calculus, Part II (FTC II)**
- **Type:** Theorem
- **Statement:** Assume that $f$ is continuous on an open interval $I$, and let $a$ be a point in $I$. The area function $A(x)$ defined by:
  $$
  A(x) = \int_{a}^{x} f(t) dt
  $$
  is an antiderivative of $f$ on $I$. That is:
  $$
  A'(x) = \frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)
  $$
- **Conditions / scope:** $f$ must be continuous on the interval containing $a$ and $x$. The lower limit $a$ is a constant.
- **Note:** This theorem guarantees the existence of an antiderivative for every continuous function.

**Card 2: The Chain Rule and Variable Upper Limits**
- **Type:** Technique
- **Statement:** Let $A(x) = \int_{a}^{x} f(t) dt$. For a composite function $G(x) = A(g(x)) = \int_{a}^{g(x)} f(t) dt$, the derivative is:
  $$
  G'(x) = A'(g(x))g'(x) = f(g(x))g'(x)
  $$
- **Conditions / scope:** $f$ is continuous and $g$ is differentiable.
- **Note:** This uses the Chain Rule alongside FTC II to differentiate integrals whose upper limit is a function of $x$ rather than just $x$ itself.

### 4. Methods and Techniques
**Method 1: Differentiating an Integral with a Variable Upper Limit**
- **When to use:** When you encounter a function defined as an integral like $A(x) = \int_{a}^{x} f(t) dt$ and need to find its derivative.
- **Steps:**
  1.  Substitute the upper limit $x$ directly into the integrand $f(t)$ to get $f(x)$. This is the derivative.
  2.  If the upper limit is a function $g(x)$ rather than $x$, apply the Chain Rule: multiply by $g'(x)$.

**Method 2: Approximating and Graphing an Area Function**
- **When to use:** When the integrand $f$ has no elementary antiderivative, but you need to analyze the properties of $A(x)$ (e.g., increasing/decreasing, critical points).
- **Steps:**
  1.  Use Riemann sums (via computer or manual approximation) to calculate $A(x)$ at many sample points.
  2.  Plot these points and connect them smoothly.
  3.  Analyze the derivative $A'(x) = f(x)$ using standard calculus techniques (first derivative test, concavity, etc.), as the derivative is often easier to understand than the function itself.

### 5. Common Pitfalls
- ❌ Forgetting to apply the Chain Rule when the upper limit is a function, like $\int_{a}^{x^2} f(t) dt$. → ✅ Remember to differentiate the upper limit $g(x)$ and multiply the result by $f(g(x))$.
- ❌ Thinking you need to take the derivative of the integrand for the correct answer. → ✅ You just substitute the upper limit into the integrand; you do not differentiate the integrand itself.
- ❌ Misidentifying the lower limit. → ✅ The derivative of $\int_{a}^{x} f(t) dt$ with constant lower limit $a$ is just $f(x)$. If the lower limit is also a function (like $\int_{x^2}^{x^3} f(t) dt$), you must split the integral into two parts and apply the reverse limit property.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The text repeatedly emphasizes the inverse relationship: "Integration then Differentiation = Identity (you get back to $f$)". Part II shows that if you differentiate an area function, you get back the original curve. Conversely, if you integrate a derivative, you get the net change (FTC I). This inverse relationship is the core of calculus.
**(b) Visualization suggestions:**
- **Area Function Shape Converter:** A component showing two linked graphs: $y = f(x)$ and $y = A(x) = \int_{a}^{x} f(t) dt$. As the user moves a point $x$ along the horizontal axis of $f(x)$, $A(x)$ is updated. The slope of $A(x)$ at that $x$ is visually equal to the height of $f(x)$, demonstrating $A'(x) = f(x)$.

### 7. Concept Self-Check (original)
**Q1.** What is $\frac{d}{dx} \int_{0}^{x} t^2 dt$?
- **Answer:** $x^2$.
- **Explanation:** By FTC II, the derivative of the area function is simply the integrand evaluated at the upper limit $x$.

**Q2.** If $A(x) = \int_{2}^{x^3} \sin t dt$, what is $A'(x)$?
- **Answer:** $3x^2 \sin(x^3)$.
- **Explanation:** According to FTC II combined with the Chain Rule, $A'(x) = \sin(x^3) \cdot \frac{d}{dx}(x^3) = \sin(x^3) \cdot 3x^2$.

**Q3.** Does every continuous function have an antiderivative?
- **Answer:** Yes.
- **Explanation:** FTC II guarantees that the area function $A(x) = \int_{a}^{x} f(t) dt$ is an antiderivative of $f(x)$ for any continuous function, even if it cannot be written in elementary terms.

**Q4.** How can you estimate the value of $A(5)$ for $A(x) = \int_{0}^{x} \sqrt{1+\cos t} dt$?
- **Answer:** By approximating the definite integral $\int_{0}^{5} \sqrt{1+\cos t} dt$ using a Riemann sum or a computer algebra system.
- **Explanation:** Since there is no simple elementary antiderivative for $\sqrt{1+\cos t}$, you cannot use FTC I directly. The value of $A(5)$ must be found through numerical approximation.

**Q5.** True or False: If $G(x) = \int_{x}^{a} f(t) dt$ (where $a$ is constant), then $G'(x) = -f(x)$.
- **Answer:** True.
- **Explanation:** Using the property for reversing limits, $G(x) = -\int_{a}^{x} f(t) dt$. The derivative of this is $-f(x)$.

---

## 5.6 Net Change as the Integral of a Rate of Change

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Net change | The total accumulation of a quantity over a time interval, representing the difference between its final and initial values. |
| Rate of change | The derivative of a quantity with respect to time. |
| Displacement | The net change in position of an object (final position minus initial position). |
| Distance traveled | The total length of the path taken by an object, regardless of direction. |
| Marginal cost | The rate of change of total cost with respect to production quantity ($C'(x)$). |
| Speed | The absolute value of velocity $|v(t)|$. |

### 2. Why This Section Matters
This section applies the integral to real-world phenomena in physics, economics, and engineering. It establishes a universal principle: the net change in a quantity is the integral of its rate of change. This is essential for calculating displacement from velocity, distance traveled from speed, cost from marginal cost, and flow from flow rates. It links the abstract mathematical definition of the integral to physical reality.

### 3. Core Cards

**Card 1: Net Change as the Integral of a Rate of Change**
- **Type:** Theorem
- **Statement:** The net change in a quantity $s(t)$ over the interval $[t_1, t_2]$ is given by the integral of its rate of change $s'(t)$:
  $$
  \int_{t_1}^{t_2} s'(t) dt = s(t_2) - s(t_1)
  $$
- **Conditions / scope:** $s'(t)$ must be integrable on $[t_1, t_2]$.
- **Note:** This is a direct application of FTC I. It is the foundational principle behind most applications of integrals in science.

**Card 2: The Integral of Velocity**
- **Type:** Theorem
- **Statement:** For an object in linear motion with velocity $v(t)$:
  - Displacement during $[t_1, t_2]$ = $\int_{t_1}^{t_2} v(t) dt$
  - Distance traveled during $[t_1, t_2]$ = $\int_{t_1}^{t_2} |v(t)| dt$
- **Conditions / scope:** $v(t)$ is integrable.
- **Note:** Displacement is a vector quantity (signed area); distance traveled is a scalar quantity (total area, including portions where velocity is negative).

### 4. Methods and Techniques
**Method 1: Finding Displacement and Total Distance Traveled**
- **When to use:** When analyzing the motion of an object.
- **Steps:**
  1.  Find the velocity function $v(t)$ or acceleration $a(t)$ if velocity is not given.
  2.  For displacement, integrate $v(t)$ over the time interval.
  3.  For distance traveled, identify time intervals where $v(t) \ge 0$ and where $v(t) < 0$. Write $|v(t)|$ as a piecewise function, integrating $v(t)$ on positive intervals and $-v(t)$ on negative intervals.

**Method 2: Calculating Accumulated Quantity from a Rate**
- **When to use:** Given a rate such as flow rate $r(t)$ (water, cars, etc.) or marginal cost $C'(x)$.
- **Steps:**
  1.  Identify the rate of change function.
  2.  Integrate the rate of change over the desired time interval. This gives the net accumulation (e.g., total water flowed, total additional cost, total cars passed).
  3.  If an initial condition is given (e.g., "bucket initially empty", "start-up cost is..."), add it to the net accumulation to find the total final amount.

### 5. Common Pitfalls
- ❌ Using displacement to describe the *total* path length. → ✅ Displacement is the net vector from start to finish; distance traveled is the total scalar path length. If the object changes direction, distance traveled > displacement.
- ❌ Ignoring negative rates when solving real-world problems. → ✅ For *total* volume or distance, a negative rate of change (e.g., water draining out) must be represented using the absolute value or by careful interpretation (e.g., total water lost).
- ❌ Confusing marginal cost with total cost. → ✅ Marginal cost is a *rate* (cost per unit). The total change in cost is the integral of marginal cost; the *total* cost requires adding the fixed/initial cost.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** This concept extends the "area under the curve" idea from geometry to measurable physical quantities. The area under a flow rate curve represents volume, the area under a velocity curve represents displacement, and the area under a marginal cost curve represents total change in cost.
**(b) Visualization suggestions:**
- **Motion Analyzer:** An interactive tool where a user can click to draw a velocity-time graph $v(t)$. The application will automatically compute and display the displacement (the integral of the curve) and the distance traveled (the integral of the absolute value of the curve). It can also show a motion diagram (dot on a line) moving according to the drawn velocity.

### 7. Concept Self-Check (original)
**Q1.** If an object's velocity is $v(t)$, which integral gives the total distance it traveled over the first 5 seconds?
- **Answer:** $\int_{0}^{5} |v(t)| dt$.
- **Explanation:** Distance traveled is the integral of the speed, which is the absolute value of velocity.

**Q2.** A manufacturer has marginal cost $C'(x)$ dollars per unit. What is the economic meaning of $\int_{100}^{200} C'(x) dx$?
- **Answer:** The increase in total cost — that is, $C(200) - C(100)$ — incurred by raising production from 100 units to 200 units (not the total cost $C(200)$ itself).
- **Explanation:** According to the net change theorem, the integral of the rate of change (marginal cost) equals the net change in the total cost over the production interval.

**Q3.** True or False: The displacement is always greater than or equal to the distance traveled.
- **Answer:** False.
- **Explanation:** Displacement is the net change in position (magnitude $|s(t_2)-s(t_1)|$), while distance traveled is the total path length. Distance traveled is always greater than or equal to the displacement magnitude.

**Q4.** If water flows into a tank at a rate of $r(t)$ L/min for 10 minutes, and the tank starts with 50 L, how much water is in the tank at the end?
- **Answer:** $50 + \int_{0}^{10} r(t) dt$ liters.
- **Explanation:** The initial amount plus the integral of the inflow rate (net change) gives the total final amount.

**Q5.** What does it mean if $\int_{0}^{4} v(t) dt = 10$ meters for a particle?
- **Answer:** The particle moved 10 meters net to the right (or positive direction) over the first 4 seconds.
- **Explanation:** The positive value indicates a net displacement in the positive direction, but it does not preclude the particle having moved back and forth; it only gives the net change.

---

## 5.7 The Substitution Method

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Substitution Method | A technique for integrating composite functions by reversing the Chain Rule. |
| U-substitution | The common name for the method where we substitute $u$ for the "inner" function. |
| Change of variables | The process of rewriting an integral in terms of a new variable $u$. |
| Differential ($du$) | A small change in $u$, related to $dx$ by $du = u'(x) dx$. |

### 2. Why This Section Matters
Integration (antidifferentiation) is generally much harder than differentiation. This section introduces the first major technique for tackling more complex integrals. The Substitution Method (also called U-substitution) is the reverse of the Chain Rule and is crucial for integrating composite functions. It expands our ability to find antiderivatives and evaluate definite integrals for a wide range of practical functions.

### 3. Core Cards

**Card 1: The Substitution Method (Reverse Chain Rule)**
- **Type:** Theorem
- **Statement:** If $F'(x) = f(x)$ and $u$ is a differentiable function, then:
  $$
  \int f(u(x)) u'(x) dx = F(u(x)) + C
  $$
  Using differentials, this is written as:
  $$
  \int f(u) du = F(u) + C
  $$
- **Conditions / scope:** $f$ and $u$ are continuous and differentiable as required.
- **Note:** The key is to recognize a composite function $f(u(x))$ multiplied by the derivative of the inner function $u'(x)$.

**Card 2: Change of Variables Formula for Definite Integrals**
- **Type:** Theorem
- **Statement:** If $u'$ is continuous on $[a,b]$ and $f$ is continuous on the range of $u$:
  $$
  \int_{a}^{b} f(u(x)) u'(x) dx = \int_{u(a)}^{u(b)} f(u) du
  $$
- **Conditions / scope:** You **must** change the limits of integration from $x$-values to the corresponding $u$-values when applying this formula directly to a definite integral.
- **Note:** Alternatively, you can compute the indefinite integral in terms of $x$ first and then use FTC I to evaluate between $a$ and $b$.

**Card 3: Antiderivatives of $\tan x$ and $\cot x$**
- **Type:** Formula
- **Statement:** The substitution $u = \cos x$ is used to derive:
  $$
  \int \tan \theta d\theta = \ln |\sec \theta| + C
  $$
  The substitution $u = \sin x$ is used to derive:
  $$
  \int \cot \theta d\theta = \ln |\sin \theta| + C
  $$
- **Conditions / scope:** Valid where the functions are defined.
- **Note:** These are frequently needed in more advanced integration problems.

### 4. Methods and Techniques
**Method 1: Evaluating an Indefinite Integral using Substitution**
- **When to use:** When the integrand contains a composite function and the derivative of the "inner" function is also present as a factor.
- **Steps:**
  1.  Choose an appropriate inner function $u = g(x)$.
  2.  Compute the differential $du = g'(x) dx$.
  3.  Rewrite the entire integral in terms of $u$ and $du$. Manipulate constants as needed (e.g., if $du = 2x dx$ but only $x dx$ is present, write $x dx = \frac{1}{2} du$).
  4.  Evaluate the simplified integral in terms of $u$.
  5.  Replace $u$ with $g(x)$ in the final answer.

**Method 2: Evaluating a Definite Integral using Substitution**
- **When to use:** When evaluating a definite integral that requires substitution.
- **Steps:** There are two ways:
  1.  **Option A (Change Limits):** Perform the substitution and **change the limits of integration** to $u(a)$ and $u(b)$. Evaluate the resulting definite integral entirely in the $u$ domain.
  2.  **Option B (Original Limits):** Evaluate the indefinite integral in terms of $x$ as in Method 1. Then use FTC I with the original limits $a$ and $b$ on the $x$-expression.

### 5. Common Pitfalls
- ❌ Forgetting to substitute the $dx$ term with $du$. → ✅ You must express $dx$ in terms of $du$ using the differential relationship $du = u'(x) dx$. If you do not convert $dx$, you are integrating with respect to two different variables.
- ❌ Using the original limits $a$ and $b$ after changing the variable to $u$ in a definite integral. → ✅ When using **Option A**, you must change the limits to $u(a)$ and $u(b)$. If you keep the original limits, use **Option B** (substitute back to $x$ first).
- ❌ Forgetting to substitute back to $x$ after evaluating an indefinite integral. → ✅ The final answer for an indefinite integral must always be expressed in terms of the original variable.
- ❌ Picking an unhelpful substitution. → ✅ A good substitution simplifies the integral. Often the "inside" of a composite function, or a denominator, works well. The text notes that even small changes to the integrand can break the method.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** Substitution is the reverse of the Chain Rule. It "undoes" the derivative of the inner function. Think of it as a tool to simplify the integrand into a form we already know how to integrate. The conceptual insight highlights that the method is fragile; changing a factor from 2x to 2.1x can make it fail.
**(b) Visualization suggestions:**
- **Substitution Visualization:** An interactive graph showing the geometric interpretation of the substitution $u = g(x)$. Show how a small interval $dx$ maps to $du$ and how the function's area transforms under the change of variables, especially useful for demonstrating the Change of Variables Formula for definite integrals.

### 7. Concept Self-Check (original)
**Q1.** What substitution would you choose for $\int x \cos(x^2) dx$?
- **Answer:** $u = x^2$.
- **Explanation:** The derivative of $x^2$ is $2x$, which is a constant multiple of the extra factor $x$ in the integrand.

**Q2.** If $u = x^3 + 1$, what is $du$?
- **Answer:** $du = 3x^2 dx$.
- **Explanation:** Differentiating $u$ with respect to $x$ gives $du/dx = 3x^2$. Multiplying both sides by $dx$ yields $du = 3x^2 dx$.

**Q3.** When using substitution on $\int_{0}^{2} 2x(x^2+1)^2 dx$, what are the new limits of integration in terms of $u$?
- **Answer:** $1$ to $5$.
- **Explanation:** If $u = x^2+1$, then $u(0) = 1$ and $u(2) = 5$.

**Q4.** Can you use substitution to evaluate $\int e^{x^2} dx$?
- **Answer:** It would not be helpful, and likely impossible with this simple method.
- **Explanation:** The derivative of $x^2$ ($2x$) is not present as a factor in the integrand. There is no $2x$ term to account for $du$.

**Q5.** What is the correct formula for $\int \tan x dx$?
- **Answer:** $\ln|\sec x| + C$.
- **Explanation:** This is derived by rewriting $\tan x = \sin x / \cos x$, letting $u = \cos x$, which gives $du = -\sin x dx$, leading to $-\int \frac{1}{u} du = -\ln|\cos x| = \ln|\sec x| + C$.

---

## 5.8 Further Integral Formulas

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Inverse trigonometric integrals | Integrals whose results involve inverse trigonometric functions (arcsin, arctan, arcsec). |
| Natural log as an integral | Expressing $\ln x$ as a definite integral: $\int_{1}^{x} 1/t dt$. |
| General exponential integral | Integral formula for $b^x$ where $b > 0$ and $b \neq 1$. |

### 2. Why This Section Matters
This section adds a suite of crucial integration formulas to the toolbox. While the integrals of inverse trig functions are derived directly from their derivatives, these formulas are so frequently used in calculus, physics, and engineering that they must be memorized. This section also solidifies the connection between the natural logarithm and the area under the hyperbola $y=1/x$.

### 3. Core Cards

**Card 1: Inverse Trigonometric Integrals**
- **Type:** Formula
- **Statement:** The following integrals are direct consequences of derivative formulas:
  $$
  \int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C
  $$
  $$
  \int \frac{dx}{x^2 + 1} = \tan^{-1}x + C
  $$
  $$
  \int \frac{dx}{|x|\sqrt{x^2-1}} = \sec^{-1}x + C
  $$
- **Conditions / scope:** Observe the domains of the resulting inverse functions. The formula for $\sec^{-1}x$ requires the absolute value $|x|$ in the denominator.
- **Note:** These formulas are often generalized via substitution to handle integrals like $\int \frac{dx}{\sqrt{a^2 - x^2}}$ or $\int \frac{dx}{x^2 + a^2}$.

**Card 2: Integral of $b^x$**
- **Type:** Formula
- **Statement:** For $b > 0$ and $b \neq 1$:
  $$
  \int b^x dx = \frac{b^x}{\ln b} + C
  $$
- **Conditions / scope:** $b$ is a positive constant not equal to 1.
- **Note:** This formula is used when the base of the exponential is not $e$.

**Card 3: Natural Logarithm as a Definite Integral**
- **Type:** Formula
- **Statement:** The function $\ln x$ can be defined for $x > 0$ by:
  $$
  \ln x = \int_{1}^{x} \frac{1}{t} dt
  $$
- **Conditions / scope:** $x > 0$.
- **Note:** Geometrically, $\ln x$ is the area under the curve $y = 1/t$ from $t=1$ to $t=x$. This can serve as the formal definition of the natural logarithm.

### 4. Methods and Techniques
**Method 1: Using Substitution with Inverse Trig Formulas**
- **When to use:** When the integrand contains expressions like $\frac{1}{\sqrt{a^2 - x^2}}$ or $\frac{1}{a^2 + x^2}$.
- **Steps:** Make a substitution to rewrite the integrand into one of the basic inverse trigonometric forms. For example, for $\int \frac{dx}{\sqrt{9 - x^2}}$, let $u = x/3$, so $dx = 3 du$ and the integrand becomes $\frac{3 du}{\sqrt{9 - 9u^2}} = \frac{du}{\sqrt{1 - u^2}}$, which evaluates to $\sin^{-1}(x/3) + C$.

**Method 2: Recognizing the General Exponential Form**
- **When to use:** When integrating a function of the form $b^x$ or $b^{kx}$.
- **Steps:** Apply the formula $\int b^x dx = \frac{b^x}{\ln b}$. For more complex exponents, use substitution to convert the integrand into $b^u du$.

### 5. Common Pitfalls
- ❌ Forgetting the absolute value in the arcsecant integral. → ✅ The correct formula includes $|x|$ in the denominator: $\int \frac{dx}{|x|\sqrt{x^2-1}} = \sec^{-1}x + C$.
- ❌ Using the wrong inverse trigonometric identity for the form of the integrand. → ✅ For $\frac{dx}{\sqrt{1-x^2}}$, use $\sin^{-1}x$. For $\frac{dx}{x^2+1}$, use $\tan^{-1}x$. For $\frac{dx}{|x|\sqrt{x^2-1}}$, use $\sec^{-1}x$.
- ❌ Forgetting the constant factor when generalizing these formulas. → ✅ For instance, $\int \frac{dx}{x^2 + 4} = \frac{1}{2} \tan^{-1}(\frac{x}{2}) + C$. The substitution corrects for the missing factor of $a$ in the denominator.

### 6. Intuition and Visualization Suggestions
**(a) Intuition:** The natural log function $\ln x$ is fundamentally an area function. The inverse trigonometric functions, often viewed as purely "angle-measuring" functions, have simple algebraic integrals ($\int \frac{1}{\sqrt{1-x^2}}dx$). This highlights the deep connection between geometry, trigonometry, and algebra within calculus.
**(b) Visualization suggestions:**
- **Logarithm as Area:** An interactive graph of the hyperbola $y=1/t$. Users can drag a slider for $x$ from $0.1$ to $10$, and the area under the curve from $1$ to $x$ will be shaded, with the numerical value of the area and $\ln x$ displayed simultaneously.
- **Inverse Trig as Area:** An interactive graph showing the function $1/\sqrt{1-x^2}$. Shade the region from $0$ to $x$ and show the numerical area equals $\sin^{-1}x$.

### 7. Concept Self-Check (original)
**Q1.** What is the derivative of $\tan^{-1}x$?
- **Answer:** $\frac{1}{x^2 + 1}$.
- **Explanation:** This derivative is the integrand for $\int \frac{1}{x^2 + 1} dx$.

**Q2.** What is the integral of $2^x$?
- **Answer:** $\frac{2^x}{\ln 2} + C$.
- **Explanation:** Using the formula $\int b^x dx = b^x / \ln b$ with $b=2$.

**Q3.** According to the area definition of $\ln x$, what is $\int_{1}^{e} \frac{1}{t} dt$?
- **Answer:** $1$.
- **Explanation:** By definition, $\ln(e) = 1$. Geometrically, the area under the hyperbola from 1 to $e$ is equal to 1.

**Q4.** What is the antiderivative of $1/\sqrt{4 - x^2}$?
- **Answer:** $\sin^{-1}(\frac{x}{2}) + C$.
- **Explanation:** Rewrite as $1/\sqrt{4(1 - (x/2)^2)}$, which becomes $\frac{1}{2} \cdot 1/\sqrt{1 - (x/2)^2}$. Let $u = x/2, dx = 2 du$, the integral becomes $\int 1/\sqrt{1-u^2} du = \sin^{-1}u = \sin^{-1}(x/2) + C$.

**Q5.** True or False: $\int \frac{1}{x^2 - 1} dx = \tan^{-1}x + C$.
- **Answer:** False.
- **Explanation:** The formula $\tan^{-1}x$ applies to the form $\frac{1}{x^2 + 1}$. The form $\frac{1}{x^2 - 1}$ does not match the inverse tangent formula (it requires partial fractions, covered in a later chapter on techniques of integration).

---
## Part 3: Chapter Quick-Reference Sheet

## Chapter 5 Quick Reference

### 5.1 Approximating and Computing Area
- **Summation notation:** $\sum_{j=m}^{n} a_j = a_m + a_{m+1} + \cdots + a_n$
- **Linearity of sums:** $\sum (a_j+b_j) = \sum a_j + \sum b_j$, $\sum C a_j = C \sum a_j$, $\sum_{j=1}^{n} C = nC$.
- **Power sums:**
  - $\sum_{j=1}^{N} j = \frac{N(N+1)}{2}$
  - $\sum_{j=1}^{N} j^2 = \frac{N(N+1)(2N+1)}{6}$
  - $\sum_{j=1}^{N} j^3 = \frac{N^2(N+1)^2}{4}$
- **Area approximations:** For $\Delta x = \frac{b-a}{N}$ and $x_j = a + j\Delta x$:
  - $R_N = \Delta x \sum_{j=1}^{N} f(x_j)$
  - $L_N = \Delta x \sum_{j=0}^{N-1} f(x_j)$
  - $M_N = \Delta x \sum_{j=0}^{N-1} f\left(\frac{x_j + x_{j+1}}{2}\right)$
- **Area as a limit:** $\text{Area} = \lim_{N\to\infty} R_N = \lim_{N\to\infty} L_N = \lim_{N\to\infty} M_N$ for continuous $f$.
- **Monotonic functions:** For an increasing function, $L_N \le A \le R_N$. For a decreasing function, $R_N \le A \le L_N$.

### 5.2 The Definite Integral
- **Riemann sum:** $R(f,P,C) = \sum_{i=1}^{N} f(c_i)\Delta x_i$, where $\Delta x_i = x_i - x_{i-1}$.
- **Definite integral (definition):** $\int_{a}^{b} f(x) dx = \lim_{\|P\| \to 0} \sum_{i=1}^{N} f(c_i)\Delta x_i$.
- **Integrability:** Continuous functions (and those with finitely many jump discontinuities) are integrable.
- **Integral of a constant:** $\int_{a}^{b} K dx = K(b-a)$.
- **Signed area:** The integral $\int_{a}^{b} f(x) dx$ gives the area above the axis minus the area below the axis.
- **Linearity:**
  - $\int_{a}^{b} (f(x) \pm g(x)) dx = \int_{a}^{b} f(x) dx \pm \int_{a}^{b} g(x) dx$
  - $\int_{a}^{b} C f(x) dx = C \int_{a}^{b} f(x) dx$
- **Additivity:** $\int_{a}^{b} f(x) dx + \int_{b}^{c} f(x) dx = \int_{a}^{c} f(x) dx$.
- **Reversed limits:** $\int_{b}^{a} f(x) dx = -\int_{a}^{b} f(x) dx$.
- **Zero-length interval:** $\int_{a}^{a} f(x) dx = 0$.
- **Comparison Theorem:** If $g(x) \le f(x)$ on $[a,b]$, then $\int_{a}^{b} g(x) dx \le \int_{a}^{b} f(x) dx$.
- **Bounding an integral:** $m(b-a) \le \int_{a}^{b} f(x) dx \le M(b-a)$ where $m$ and $M$ are the min and max of $f$ on $[a,b]$.
- **Power integrals:** $\int_{0}^{b} x dx = \frac{1}{2}b^2$, $\int_{0}^{b} x^2 dx = \frac{1}{3}b^3$ (for $b>0$, extend by definition for $b \le 0$).

### 5.3 The Indefinite Integral
- **Antiderivative:** $F'(x) = f(x) \implies F(x)$ is an antiderivative of $f(x)$.
- **General Antiderivative:** If $F$ is an antiderivative, all antiderivatives are $F(x) + C$.
- **Indefinite Integral notation:** $\int f(x) dx = F(x) + C$ means $F'(x) = f(x)$.
- **Power Rule:** $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$.
- **Reciprocal Rule:** $\int \frac{1}{x} dx = \ln|x| + C$.
- **Linearity:** $\int (f(x)+g(x)) dx = \int f(x) dx + \int g(x) dx$, $\int c f(x) dx = c \int f(x) dx$.
- **Trigonometric Integrals:**
  - $\int \sin x dx = -\cos x + C$
  - $\int \cos x dx = \sin x + C$
  - $\int \sec^2 x dx = \tan x + C$
  - $\int \csc^2 x dx = -\cot x + C$
  - $\int \sec x \tan x dx = \sec x + C$
  - $\int \csc x \cot x dx = -\csc x + C$
- **Exponential Integrals:**
  - $\int e^x dx = e^x + C$
  - $\int e^{kx} dx = \frac{1}{k} e^{kx} + C$

### 5.4 The Fundamental Theorem of Calculus, Part I
- **FTC I:** If $F'(x) = f(x)$, then $\int_{a}^{b} f(x) dx = F(b) - F(a)$.
- **Evaluation notation:** $F(b) - F(a) = F(x)\big|_{a}^{b}$.

### 5.5 The Fundamental Theorem of Calculus, Part II
- **FTC II:** $\frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)$, where $f$ is continuous.
- **Area function:** $A(x) = \int_{a}^{x} f(t) dt$.
- **Chain rule extension:** $\frac{d}{dx} \int_{a}^{g(x)} f(t) dt = f(g(x)) \cdot g'(x)$.

### 5.6 Net Change as the Integral of a Rate of Change
- **Net Change Theorem:** $\int_{t_1}^{t_2} s'(t) dt = s(t_2) - s(t_1)$.
- **Displacement:** $\int_{t_1}^{t_2} v(t) dt$.
- **Distance traveled:** $\int_{t_1}^{t_2} |v(t)| dt$.
- **Total cost:** $C(b) - C(a) = \int_{a}^{b} C'(x) dx$.

### 5.7 The Substitution Method
- **Indefinite Substitution:** $\int f(u(x)) u'(x) dx = \int f(u) du$.
- **Definite Substitution:** $\int_{a}^{b} f(u(x)) u'(x) dx = \int_{u(a)}^{u(b)} f(u) du$.
- **Tangent and cotangent integrals:**
  - $\int \tan \theta d\theta = \ln|\sec \theta| + C$
  - $\int \cot \theta d\theta = \ln|\sin \theta| + C$

### 5.8 Further Integral Formulas
- **Inverse Trig Integrals:**
  - $\int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C$
  - $\int \frac{dx}{x^2+1} = \tan^{-1}x + C$
  - $\int \frac{dx}{|x|\sqrt{x^2-1}} = \sec^{-1}x + C$
- **General Exponential Integral:**
  - $\int b^x dx = \frac{b^x}{\ln b} + C$
- **Logarithm as an Area:** $\ln x = \int_{1}^{x} \frac{1}{t} dt$ for $x > 0$.
