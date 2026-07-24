# Chapter 3: The Derivative

## Part 0: Structural Element Inventory

### DEFINITION boxes
- 3.1 The Derivative
- 3.1 Tangent Line

### THEOREM boxes
- 3.1 Theorem 1 Derivative of Linear and Constant Functions
- 3.2 Theorem 2 Linearity Rules
- 3.2 Theorem 3 The Exponential Function Rule
- 3.2 Theorem 4 Differentiability Implies Continuity
- 3.3 Theorem 1 Product Rule
- 3.3 Theorem 2 Quotient Rule
- 3.6 Theorem 1 Derivative of Sine and Cosine
- 3.6 Theorem 2 Derivatives of Standard Trigonometric Functions
- 3.7 Theorem 1 Chain Rule
- 3.7 Theorem 2 General Power and Exponential Rules
- 3.8 Theorem 1 Derivatives of Arcsine and Arccosine
- 3.8 Theorem 2 Derivatives of Inverse Trigonometric Functions
- 3.9 Theorem 1 Derivative of the Natural Logarithm
- 3.9 Theorem 2 Derivative of $f(x) = b^x$ and $f(x) = \log_b x$

### CAUTION notes
- 3.2 The Power Rule applies only to power functions, not exponential functions.
- 3.10 Substitute specific variable values only after differentiating.

### REMINDER notes
- 3.1 Equation of a line in point-slope form.
- 3.2 $n$-factorial definition.
- 3.3 The quotient function $f/g$.
- 3.4 "Larger" vs "smaller" regarding distance from zero.
- 3.6 The standard trigonometric functions.
- 3.7 Addition formula for sine.
- 3.8 Basic identity for hyperbolic functions.

### CONCEPTUAL INSIGHT boxes
- 3.1 The Significance of Limits in the Definition of the Derivative
- 3.2 Leibniz notation
- 3.3 The Product Rule's discovery
- 3.6 Radian measure is what makes the sine derivative simple
- 3.7 Leibniz notation and rate multiplication
- 3.8 Implicit differentiation and branches
- 3.9 The preferred base $e$ for calculus
- 3.10 The sliding ladder model's breakdown

### GRAPHICAL INSIGHT boxes
- 3.6 Comparing the graphs of $\sin x$ and $\cos x$ confirms $(\sin x)' = \cos x$


## Sections in This Chapter
- 3.1 Slope at a Point: Defining the Derivative
- 3.2 From One Slope to a Slope Function
- 3.3 Differentiating Products and Quotients
- 3.4 What Derivatives Measure: Rates of Change
- 3.5 Derivatives of Derivatives
- 3.6 Differentiating the Trigonometric Family
- 3.7 Compositions and the Chain Rule
- 3.8 When y Isn't Isolated: Implicit Differentiation
- 3.9 Exponentials and Logarithms of Any Base
- 3.10 Linked Quantities: Related Rates

## Knowledge Dependencies
- **3.1 Definition of the Derivative** → Relies on the limit concept from Chapter 2 and provides the foundational definition for the entire chapter.
- **3.2 The Derivative as a Function** → Builds directly on 3.1 and establishes the derivative as a function, proving the first rules for differentiation and the relationship between differentiability and continuity.
- **3.3 Product and Quotient Rules** → Expands the toolkit of derivative rules introduced in 3.2 to handle more complex functions; used in almost every subsequent section.
- **3.4 Rates of Change** → Applies derivative rules from 3.2 and 3.3 to model real-world phenomena like motion and economics, reinforcing the physical meaning of the derivative.
- **3.5 Higher Derivatives** → Extends the derivative concept to second and higher derivatives, building on the rules from 3.2 and 3.3; essential for analyzing motion (acceleration) and curve properties.
- **3.6 Trigonometric Functions** → Adds new derivative rules for trig functions, building on the limit and derivative rules previously established. Essential for evaluating derivatives involving trigonometric components.
- **3.7 The Chain Rule** → A fundamental rule for differentiating composite functions; it builds on all previous derivative rules and is essential for 3.8 and 3.9.
- **3.8 Implicit Differentiation** → Applies the Chain Rule (3.7) to find derivatives of equations that are not solved for $y$; used to find derivatives of inverse trigonometric functions.
- **3.9 Derivatives of General Exponential and Logarithmic Functions** → Extends the exponential function rule from 3.2 to general bases and introduces logarithms, using the Chain Rule (3.7) and implicit differentiation (3.8).
- **3.10 Related Rates** → Applies the Chain Rule (3.7) and the relationship between rates of change to solve word problems involving time-dependent variables.

---
## Part 2: Section-by-Section Content

## 3.1 Slope at a Point: Defining the Derivative

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Difference Quotient | The ratio $\frac{f(x) - f(a)}{x - a}$ representing the slope of a secant line; the base of the derivative definition. |
| Derivative | The limit of the difference quotient as the change in $x$ approaches zero. |
| Tangent Line | A line passing through a point on a curve whose slope is given by the derivative at that point. |
| Differentiable | A property of a function if its derivative exists at a given point. |
| Corner | A sharp point on a graph where the left and right derivatives differ (the function is not differentiable there). |

### 2. Why This Section Matters
This section provides the rigorous, limit-based definition of the derivative, which is the central concept of differential calculus. It connects the geometric intuition of a tangent line's slope to the algebraic concept of a rate of change. This definition is the foundation for all future derivative rules and applications in the chapter.

### 3. Core Cards

**Card 1: Definition of the Derivative**
- Type: Definition
- Statement: The derivative of a function $f$ at a point $a$ is defined as the limit of the difference quotient, provided the limit exists:
  $$
 f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} 
$$
  An equivalent form is:
  $$
 f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} 
$$
- Conditions / scope: The limit must exist. If it does, $f$ is said to be differentiable at $a$.
- Note: The derivative represents both the slope of the tangent line to the graph of $f$ at $x=a$ and the instantaneous rate of change of $f$ at that point.

**Card 2: Definition of the Tangent Line**
- Type: Definition
- Statement: Assuming $f$ is differentiable at $a$, the tangent line to the graph of $y = f(x)$ at the point $P = (a, f(a))$ is the line passing through $P$ with slope $f'(a)$. Its equation in point-slope form is:
  $$
 y - f(a) = f'(a)(x - a) 
$$
- Conditions / scope: The function $f$ must be differentiable at $x = a$.
- Note: This is a precise geometric definition that replaces the intuitive notion of a line that "just touches" a curve.

**Card 3: Derivative of Linear and Constant Functions**
- Type: Theorem
- Statement:
    - For a linear function $f(x) = mx + b$, the derivative is a constant: $f'(a) = m$ for all $a$.
    - For a constant function $f(x) = b$, the derivative is zero: $f'(a) = 0$ for all $a$.
- Conditions / scope: These are consequences of the limit definition.
- Note: This aligns with the geometric fact that the slope of a straight line is constant, and the slope of a horizontal line is zero.

### 4. Methods and Techniques
- **Computing $f'(a)$ using the limit definition:** Follow a three-step process:
    1.  Write out the numerator of the difference quotient: $f(a+h) - f(a)$.
    2.  Simplify the fraction $\frac{f(a+h) - f(a)}{h}$ by dividing by $h$ and cancelling common factors. This often involves factoring to remove the $h$ from the denominator.
    3.  Take the limit as $h \to 0$ of the simplified expression by substituting $h = 0$.
- **Estimating the Derivative:** For a given point $a$, you can estimate the derivative $f'(a)$ by calculating the difference quotient for several small values of $h$ (e.g., $h = 0.1, 0.01, 0.001$) and observing the trend as $h$ shrinks. This is useful when the exact derivative cannot be computed easily or when only data points are available.

### 5. Common Pitfalls
- ❌ **Mistake:** Thinking that $f'(a)$ is found by dividing by $h$ and then evaluating at $h = 0$ before simplifying.
    - ✅ **Correct Understanding:** The expression $\frac{f(a+0) - f(a)}{0}$ is undefined. The limit process relies on simplification to remove the $0/0$ indeterminate form before evaluating.
- ❌ **Mistake:** Assuming differentiability implies continuity, and vice versa.
    - ✅ **Correct Understanding:** Differentiability *implies* continuity. However, a function can be continuous but not differentiable (e.g., $f(x) = |x|$ at $x=0$).
- ❌ **Mistake:** Concluding $f'(a)$ does not exist because the function has a vertical tangent (infinite slope).
    - ✅ **Correct Understanding:** If $\lim_{h \to 0} \frac{f(a+h)-f(a)}{h} = \pm\infty$, then $f'(a)$ does not exist as a finite number. The function is not differentiable at that point, though it may still be continuous.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT highlights the core idea: a derivative is the result of a "limit process." Geometrically, we use the slope of a secant line (which connects two distinct points) to approximate the slope of the tangent line (which touches the graph at one point). By bringing the two points closer and closer together (taking $h \to 0$), the secant line "becomes" the tangent line, and the approximation becomes an exact value.

(b) **Visualization Suggestions:**
- **Component 1: Secant to Tangent Animation**
    - *What it shows:* A graph of a function $f(x)$ with a fixed point $P = (a, f(a))$. A movable second point $Q = (a+h, f(a+h))$ slides along the curve. The secant line connecting $P$ and $Q$ and its slope are displayed.
    - *Parameters:* A slider for $h$ that shrinks the distance between $P$ and $Q$ towards zero.
    - *Observation:* As $h \to 0$, the secant line rotates into the tangent line, and its numerical slope approaches $f'(a)$.
- **Component 2: Differentiability vs. Continuity Visualizer**
    - *What it shows:* Two graphs. The left shows $f(x) = |x|$ (which is continuous but not differentiable at 0). The right shows a smooth, locally linear function at $x=0$ (which is differentiable).
    - *Parameters:* A zoom feature that zooms in on $x=0$ for both graphs.
    - *Observation:* The smooth function eventually looks like a straight line (local linearity), whereas the absolute value function retains a sharp corner (a cusp) no matter how much you zoom in.

### 7. Concept Self-Check (original)
**Q1.** True or False: The derivative $f'(a)$ always gives the slope of the secant line passing through $x=a$ and $x=a+h$.
- Answer: False.
- Explanation: The derivative is defined as the *limit* of the secant line slopes as $h \to 0$. It gives the slope of the *tangent* line at $x=a$.

**Q2.** For a function $f$, which of the following is a correct definition of its derivative at $a$?
   (a) $\lim_{h \to a} \frac{f(x) - f(a)}{x - a}$
   (b) $\lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$
   (c) $\lim_{h \to 0} \frac{f(x) - f(a)}{x - h}$
- Answer: (b).
- Explanation: The derivative is the limit of the difference quotient $\frac{f(a+h) - f(a)}{h}$ as $h$ approaches 0.

**Q3.** The function $f(x) = |x|$ is continuous at $x=0$. Why is it not differentiable there?
- Answer: It has a sharp "corner" at $x=0$. The left-hand limit of the difference quotient is $-1$ and the right-hand limit is $+1$.
- Explanation: Since the one-sided limits of the difference quotient are not equal, the two-sided limit defining the derivative does not exist.

**Q4.** What is the equation of the tangent line to $y = f(x)$ at $x = a$, assuming $f'(a)$ exists?
- Answer: $y - f(a) = f'(a)(x - a)$.
- Explanation: This is the point-slope form of a line, using the point $(a, f(a))$ and the slope $f'(a)$ provided by the derivative.

**Q5.** How can you use the finite difference quotient $\frac{f(a+h) - f(a)}{h}$ to estimate $f'(a)$?
- Answer: Compute the slope of the secant line for small values of $h$ (both positive and negative). As the values of $h$ get smaller, the result will better approximate $f'(a)$.
- Explanation: The derivative is the limit of this quotient. By making $h$ small, we approximate the limiting value.

## 3.2 From One Slope to a Slope Function

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Derivative Function | The function $f'(x)$ whose value at any point $x$ is the derivative of $f$ at that point. |
| Leibniz Notation | The notation $\frac{dy}{dx}$ or $\frac{df}{dx}$ for the derivative. |
| Power Rule | A rule stating that $\frac{d}{dx} x^n = n x^{n-1}$ for all real exponents $n$. |
| Linearity Rules | Rules stating that the derivative of a sum/difference is the sum/difference of derivatives, and the derivative of a constant multiple is the constant times the derivative. |
| Local Linearity | The property of a differentiable function where its graph becomes nearly indistinguishable from a straight line (its tangent line) when zoomed in closely. |

### 2. Why This Section Matters
This section elevates the derivative from a value at a specific point to a function that can be analyzed across an entire domain. By introducing the Power Rule and Linearity Rules, it provides the first automated tools for differentiating polynomials and simple algebraic functions. The proof that differentiability implies continuity establishes a critical link between the two foundational concepts of calculus.

### 3. Core Cards

**Card 1: The Derivative as a Function**
- Type: Definition
- Statement: The derivative of a function $f$ is the function $f'$ defined by the limit:
  $$
 f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} 
$$
- Conditions / scope: The derivative exists for all $x$ where the limit exists.
- Note: Alternative notations include $y'$, $y'(x)$, $\frac{dy}{dx}$, and $\frac{df}{dx}$.

**Card 2: The Power Rule**
- Type: Theorem
- Statement: For any real number $n$, the derivative of $x^n$ is given by:
  $$
 \frac{d}{dx} x^n = n x^{n-1} 
$$
- Conditions / scope: The rule is valid for all real exponents, including negative integers and fractions.
- Note: The Power Rule applies to *power functions* where the base is the variable and the exponent is a constant. It does **not** apply to exponential functions like $2^x$.

**Card 3: Linearity Rules**
- Type: Theorem
- Statement: If $f$ and $g$ are differentiable functions, and $c$ is a constant, then:
    - The **Sum/Difference Rule**: $(f \pm g)' = f' \pm g'$
    - The **Constant Multiple Rule**: $(cf)' = c f'$
- Conditions / scope: The functions $f$ and $g$ must be differentiable.
- Note: These rules allow for term-by-term differentiation of polynomials and other sums of functions.

**Card 4: The Exponential Function Rule**
- Type: Theorem
- Statement: The derivative of the exponential function $e^x$ is itself:
  $$
 \frac{d}{dx} e^x = e^x 
$$
- Conditions / scope: This rule is a direct consequence of the definition of $e$ and the limit $\lim_{h \to 0} \frac{e^h - 1}{h} = 1$.
- Note: This is a unique and fundamental property of the base $e$.

**Card 5: Differentiability Implies Continuity**
- Type: Theorem
- Statement: If a function $f$ is differentiable at a point $x = c$, then it must also be continuous at $x = c$.
- Conditions / scope: The converse is *not* true. A function can be continuous at a point but not differentiable there (e.g., $f(x) = |x|$ at $x=0$).
- Note: A function with a jump, hole, or vertical asymptote cannot be differentiable, as the limit defining the derivative will fail.

**Card 6: Local Linearity**
- Type: Graphical Insight
- Statement: A function $f$ is differentiable at $x = a$ if and only if its graph becomes visually indistinguishable from its tangent line when zoomed in on the point $(a, f(a))$.
- Conditions / scope: This is a visual interpretation of differentiability.
- Note: If the graph retains a "corner" or "cusp" under infinite zooming, the function is not differentiable at that point.

### 4. Methods and Techniques
- **Differentiating Polynomials:** Apply the Power Rule to each term, then use the Linearity Rules to combine the results. For example, $\frac{d}{dx} (3x^4 - 2x + 7) = 12x^3 - 2$.
- **Identifying the Sign of $f'$ from $f$:** Analyze the graph of $f$. Where the graph is increasing (slope upward), $f'(x) > 0$. Where the graph is decreasing (slope downward), $f'(x) < 0$. Where the graph has a horizontal tangent (peak or valley), $f'(x) = 0$.

### 5. Common Pitfalls
- ❌ **CAUTION:** Applying the Power Rule to exponential functions.
    - ✅ **Correct Understanding:** The Power Rule is for functions like $x^n$. For functions like $2^x$, the base is a constant and the exponent is a variable, so a different rule (introduced later) must be applied. **Never** write $\frac{d}{dx} 2^x = x 2^{x-1}$.
- ❌ **Mistake:** Assuming that continuity at a point guarantees differentiability.
    - ✅ **Correct Understanding:** The relationship is one-way: Differentiability $\implies$ Continuity. A continuous function can have a corner (like $|x|$), a cusp (like $x^{2/3}$), or a vertical tangent (like $x^{1/3}$) where it fails to be differentiable.
- ❌ **Mistake:** Thinking the derivative of a constant times a function is the derivative of the constant times the derivative of the function, while forgetting to keep the constant.
    - ✅ **Correct Understanding:** The Constant Multiple Rule says $(c f)' = c f'$, meaning the constant factor "hangs on" to the derivative of the function.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT on Leibniz notation shows why it is so powerful: it reminds us that the derivative is a limit of a ratio ($\Delta f / \Delta x$), it clearly specifies the independent and dependent variables, and it allows us to think of $d/dx$ as an operator. Furthermore, the notation suggests a "fraction" behavior, which is useful for the Chain Rule (like multiplying rates).
(b) **Visualization Suggestions:**
- **Component 1: Power Rule Visualization**
    - *What it shows:* The graph of $y = x^n$ and its derivative $y' = nx^{n-1}$. The slope of the tangent line to the original function is shown dynamically.
    - *Parameters:* A slider to change the exponent $n$ (e.g., 1, 2, 3, 4, 1/2, -1).
    - *Observation:* As $n$ changes, the user can see the relationship between the shape of the original graph and its derivative, visually confirming the Power Rule.
- **Component 2: Local Linearity Demo**
    - *What it shows:* A wavy function graph with a point $P$ on the curve. A slider zooms in on point $P$.
    - *Parameters:* A zoom slider that progressively magnifies the area around $P$.
    - *Observation:* The user sees that the curve appears as a straight line (the tangent) after sufficient zooming. If the point is changed to a corner (like $|x|$ at 0), the corner remains sharp even under zoom, showing it is not differentiable.

### 7. Concept Self-Check (original)
**Q1.** If $f'(x) > 0$ for all $x$ in an interval, what can you say about the graph of $f$ on that interval?
- Answer: The graph is increasing.
- Explanation: A positive derivative means the tangent lines have a positive slope, indicating the function's values are rising.

**Q2.** True or False: If $f$ is continuous at $x=2$, then $f$ is differentiable at $x=2$.
- Answer: False.
- Explanation: Continuity is a necessary but not sufficient condition for differentiability. For instance, $f(x) = |x-2|$ is continuous at 2 but has a corner there, so it is not differentiable.

**Q3.** What is the derivative of $f(x) = x^{-3/2}$?
- Answer: $-\frac{3}{2} x^{-5/2}$.
- Explanation: Using the Power Rule, multiply by the exponent $-3/2$ and subtract 1 from the exponent: $(-3/2) x^{(-3/2) - 1} = -\frac{3}{2} x^{-5/2}$.

**Q4.** How can you tell that the function $f(x) = x^{1/3}$ is not differentiable at $x=0$ just by looking at the definition of the derivative?
- Answer: The limit $\lim_{h \to 0} \frac{h^{1/3} - 0}{h} = \lim_{h \to 0} h^{-2/3}$ diverges to infinity.
- Explanation: Since the limit defining the derivative does not produce a finite number, the derivative at $x=0$ does not exist. Geometrically, this corresponds to a vertical tangent line.

**Q5.** What does the Leibniz notation $\frac{d}{dx} (\sin x)$ represent?
- Answer: The derivative of the function $\sin x$ with respect to the variable $x$.
- Explanation: The notation $\frac{d}{dx}$ acts as an operator, signifying differentiation with respect to $x$ is to be performed on the function $\sin x$.

## 3.3 Differentiating Products and Quotients

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Product Rule | A rule for differentiating the product of two functions: $(fg)' = f'g + fg'$. |
| Quotient Rule | A rule for differentiating the quotient of two functions: $\left(\frac{f}{g}\right)' = \frac{g f' - f g'}{g^2}$. |

### 2. Why This Section Matters
These rules are essential for differentiating functions that cannot be easily simplified algebraically. The Product Rule is foundational for many derivatives in calculus (such as the derivative of $x e^x$) and is required to prove the Quotient Rule. Together with the Chain Rule (Section 3.7), they form the core toolkit for differentiating most elementary functions.

### 3. Core Cards

**Card 1: The Product Rule**
- Type: Theorem
- Statement: If $f$ and $g$ are differentiable functions, then $f g$ is differentiable and:
  $$
 (f g)'(x) = f'(x) g(x) + f(x) g'(x) 
$$
- Conditions / scope: Both $f$ and $g$ must be differentiable.
- Note: A common mnemonic is "Derivative of the first times the second, plus the first times the derivative of the second." It is **not** simply the product of the derivatives.

**Card 2: The Quotient Rule**
- Type: Theorem
- Statement: If $f$ and $g$ are differentiable functions, then $f/g$ is differentiable for all $x$ where $g(x) \neq 0$, and:
  $$
 \left(\frac{f}{g}\right)'(x) = \frac{g(x) f'(x) - f(x) g'(x)}{[g(x)]^2} 
$$
- Conditions / scope: Requires $g(x) \neq 0$.
- Note: A common mnemonic is "Low D-High minus High D-Low over Low-Low." It is **not** simply the quotient of the derivatives.

### 4. Methods and Techniques
- **Applying the Product Rule:** Identify the two factors. Differentiate one factor while keeping the other unchanged, then add the product of the unchanged first factor and the derivative of the second factor. For functions with more than two factors, apply the rule iteratively (e.g., treat $f g$ as one factor and $h$ as the other).
- **Applying the Quotient Rule:** Identify the numerator (top) and denominator (bottom). Follow the pattern: (Bottom $\times$ derivative of Top $-$ Top $\times$ derivative of Bottom) divided by Bottom squared.
- **Avoiding the Rules:** Sometimes, it is simpler to expand the function algebraically first (if possible) and then differentiate using the Power and Linearity Rules. For example, $f(x) = (x^2)(x^3)$ is easier to expand to $x^5$ than to use the Product Rule.

### 5. Common Pitfalls
- ❌ **Mistake:** Assuming that the derivative of a product is simply the product of the derivatives.
    - ✅ **Correct Understanding:** $(fg)' \neq f'g'$. The Product Rule is strictly a two-term sum involving cross-products of the derivatives and the original functions.
- ❌ **Mistake:** Assuming that the derivative of a quotient is simply the quotient of the derivatives.
    - ✅ **Correct Understanding:** $\left(\frac{f}{g}\right)' \neq \frac{f'}{g'}$. The Quotient Rule requires a specific combination of the functions and their derivatives, with the denominator squared.
- ❌ **Mistake:** Forgetting to square the denominator in the Quotient Rule.
    - ✅ **Correct Understanding:** The denominator must be squared: $(g(x))^2$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT highlights Leibniz's historical struggle with the Product Rule. He first guessed $(fg)' = f'g'$, then caught his error by noticing that for $f(x) = g(x) = x$, $(x^2)' = 2x$ but $1 \cdot 1 = 1$. The correct rule can be visualized as the area of a larger rectangle (Figure 2 in the text): if $f(x)$ and $g(x)$ are the side lengths of a rectangle, the change in area $\Delta A$ when $x$ changes by $h$ is the sum of two strips plus a corner, which algebraically translates to the Product Rule.

(b) **Visualization Suggestions:**
- **Component 1: Product Rule as Area of a Rectangle**
    - *What it shows:* A rectangle with side lengths $f(x)$ and $g(x)$. When $x$ increases to $x+h$, the sides grow to $f(x+h)$ and $g(x+h)$. The resulting change in area is visually broken down into three pieces: $g(x) \cdot \Delta f$, $f(x) \cdot \Delta g$, and $\Delta f \cdot \Delta g$.
    - *Parameters:* An animation that increments $x$ by $h$ and shows the rectangle growing.
    - *Observation:* The rate of change of the area is the sum of the rates of change of the two sides, perfectly matching the Product Rule: $f'g + fg'$. (The extra tiny corner $\Delta f \Delta g$ vanishes in the limit).

### 7. Concept Self-Check (original)
**Q1.** What is the derivative of $h(x) = x^2 e^x$?
- Answer: $h'(x) = 2x e^x + x^2 e^x = x e^x (x + 2)$.
- Explanation: Using the Product Rule: $(x^2)'e^x + x^2(e^x)' = 2x e^x + x^2 e^x$.

**Q2.** What is $\frac{d}{dx} \left( \frac{x^2}{\cos x} \right)$?
- Answer: $\frac{2x \cos x + x^2 \sin x}{\cos^2 x}$.
- Explanation: Using the Quotient Rule: $\frac{\cos x \cdot (2x) - x^2 \cdot (-\sin x)}{\cos^2 x}$.

**Q3.** True or False: $(\frac{f}{g})' = \frac{f'}{g'}$.
- Answer: False.
- Explanation: The derivative of a quotient is *not* the quotient of the derivatives. It must be calculated using the Quotient Rule formula.

**Q4.** In the Quotient Rule formula, which term is subtracted?
- Answer: The term "Top times derivative of Bottom" is subtracted from "Bottom times derivative of Top".
- Explanation: The formula is $\frac{g f' - f g'}{g^2}$. The order of subtraction matters.

**Q5.** Why might you not need to use the Product Rule to differentiate $y = (x+5)(x-5)$?
- Answer: You can expand the expression to $y = x^2 - 25$, and then differentiate using the Power Rule and Linearity Rules to get $y' = 2x$.
- Explanation: Expanding first avoids the more complex Product Rule and simplifies the differentiation process.

## 3.4 What Derivatives Measure: Rates of Change

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Rate of Change | A measure of how one quantity changes with respect to another; the derivative. |
| Average Rate of Change | The change in a quantity over an interval, calculated as $\frac{\Delta y}{\Delta x}$. |
| Instantaneous Rate of Change | The rate of change at a specific instant; the derivative $f'(x_0)$. |
| Marginal Cost | The approximate cost of producing one additional unit of a product. |
| Velocity | The rate of change of position with respect to time; the derivative of the position function. |
| Speed | The absolute value of velocity; a measure of how fast an object is moving regardless of direction. |

### 2. Why This Section Matters
This section applies the abstract concept of the derivative to real-world problems. It bridges the gap between mathematical theory and practical application by interpreting the derivative as a rate of change. This is crucial for fields like physics (kinematics), economics (marginal analysis), and biology (population growth).

### 3. Core Cards

**Card 1: Instantaneous Rate of Change**
- Type: Definition
- Statement: The instantaneous rate of change of $y = f(x)$ with respect to $x$ at $x = x_0$ is the derivative:
  $$
 f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} 
$$
- Conditions / scope: The derivative must exist at $x_0$.
- Note: The units of $f'(x_0)$ are the units of $y$ per unit of $x$.

**Card 2: Linear Motion**
- Type: Formula/Definition
- Statement: For an object moving along a straight line, its position function $s(t)$ determines its velocity $v(t)$ and its speed:
    - Velocity: $v(t) = s'(t)$
    - Speed: $|v(t)|$
- Conditions / scope: The position function $s(t)$ must be differentiable.
- Note: Velocity is a signed quantity (indicating direction), while speed is a scalar (magnitude only).

**Card 3: Motion Under Gravity**
- Type: Formula
- Statement: For an object moving vertically under the influence of gravity (ignoring air resistance), its height $s(t)$ and velocity $v(t)$ are given by:
    - $s(t) = s_0 + v_0 t - \frac{1}{2} g t^2$
    - $v(t) = v_0 - g t$
- Conditions / scope: $s_0$ is the initial height, $v_0$ is the initial velocity, and $g$ is the acceleration due to gravity ($9.8\text{ m/s}^2$ or $32\text{ ft/s}^2$).
- Note: The maximum height of a projectile is reached when its velocity is zero: $v(t) = 0$.

**Card 4: Marginal Cost**
- Type: Definition/Application
- Statement: The marginal cost at a production level $x_0$ is defined as the derivative of the cost function: $C'(x_0)$. It is interpreted as (and closely approximates) the cost of producing one additional unit, $C(x_0 + 1) - C(x_0)$.
- Conditions / scope: The cost function $C(x)$ is treated as a continuous, differentiable function.
- Note: This approximation is most accurate when production levels are high (making a single unit a very small fraction of the total).

### 4. Methods and Techniques
- **Relating Velocity and Speed:** To determine if an object is speeding up or slowing down, look at the magnitude of the slope of its position-time graph. If the graph becomes steeper (slope magnitude increases), the object is speeding up. If it flattens out (slope magnitude decreases), it is slowing down. A positive velocity means the position is increasing; a negative velocity means it is decreasing.
- **Interpreting Derivatives in Applications:** Always identify the units. For example, if $C(x)$ is cost in dollars and $x$ is number of items, then $C'(x)$ has units of dollars per item.
- **Estimating Rates from Data:** When only a table of values is available, the derivative can be estimated using difference quotients. For example, $A'(t_0) \approx \frac{A(t_1) - A(t_0)}{\Delta t}$.

### 5. Common Pitfalls
- ❌ **Mistake:** Confusing "velocity" with "speed".
    - ✅ **Correct Understanding:** Velocity is a signed rate of change ($s'(t)$). Speed is the absolute value of velocity ($|s'(t)|$). An object can have a negative velocity (moving backwards) but a positive speed. An object is speeding up if its *speed* is increasing (the graph of $s(t)$ is getting steeper).
- ❌ **Mistake:** Interpreting marginal cost as the exact cost of producing the next unit.
    - ✅ **Correct Understanding:** Marginal cost is *defined* as the derivative $C'(x)$. The exact cost of the next unit is $C(x+1) - C(x)$, and $C'(x)$ is a very good approximation of it — but the two are not identical.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The key idea of this section is the importance of units and the real-world meaning of derivatives. A rate of change tells us not just the direction of a change, but how quickly that change is happening. For example, the rate of change of temperature on the moon during an eclipse tells us how fast the surface is cooling down.

(b) **Visualization Suggestions:**
- **Component 1: Position, Velocity, and Speed Interactive Graph**
    - *What it shows:* Three separate graphs: Position $s(t)$ (as a curve), Velocity $v(t) = s'(t)$ (as a straight or curved line), and Speed $|v(t)|$. An animated point moves along the position graph, and its corresponding velocity and speed are plotted on the other graphs.
    - *Parameters:* A slider for time $t$ to move the point along the curve.
    - *Observation:* The user can visually correlate the steepness of the position curve with the magnitude of the velocity, and understand the distinction between velocity and speed when velocity is negative.
- **Component 2: Marginal Cost Visualizer**
    - *What it shows:* A graph of a cost function $C(x)$ and its derivative $C'(x)$ (marginal cost). A point $x$ is selected, and the secant line from $x$ to $x+1$ is shown.
    - *Parameters:* A slider to change the production level $x$.
    - *Observation:* The user can see the slope of the secant line (the actual cost to produce the next unit) as it approaches the tangent line (the marginal cost derivative). This shows why $C'(x)$ is a good approximation.

### 7. Concept Self-Check (original)
**Q1.** If the position of an object is given by $s(t) = t^2 - 4t$, what is its velocity at $t = 1$?
- Answer: $v(1) = -2$.
- Explanation: $v(t) = s'(t) = 2t - 4$. At $t=1$, $v(1) = 2(1) - 4 = -2$.

**Q2.** An object's velocity is $v(t) = t^2 - 1$. Is it speeding up or slowing down at $t = \tfrac{1}{2}$?
- Answer: Slowing down.
- Explanation: At $t=\tfrac{1}{2}$, the velocity is $v(\tfrac{1}{2}) = -\tfrac{3}{4}$ (negative) while the acceleration is $a(t) = 2t = 1$ (positive). Velocity and acceleration have opposite signs, so the speed $|v(t)|$ is decreasing — the object is slowing down.

**Q3.** A company's cost function is $C(x)$. What does $C'(50)$ represent?
- Answer: It is the marginal cost at a production level of 50 units — the instantaneous rate of change of cost, which approximates the cost of producing the 51st unit.
- Explanation: The derivative $C'(50)$ is the marginal cost by definition, and it estimates the additional cost $C(51) - C(50)$ of one more unit.

**Q4.** Which graph shows an object moving forward but slowing down?
- Answer: A graph with a positive slope that is decreasing (flattening out).
- Explanation: A positive slope means positive velocity (moving forward). A decreasing slope means the velocity is becoming smaller, thus the object is slowing down.

**Q5.** In the formula $s(t) = s_0 + v_0 t - \frac{1}{2}gt^2$, what does the term $-\frac{1}{2}gt^2$ represent?
- Answer: The effect of gravity on the object's position over time.
- Explanation: Gravity pulls the object downward, opposing the initial upward velocity, which is modeled by this negative quadratic term.

## 3.5 Derivatives of Derivatives

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Second Derivative | The derivative of the first derivative; measures the rate of change of the rate of change. |
| Acceleration | The second derivative of position with respect to time. |
| $n$th Derivative | The result of differentiating a function $n$ times, denoted $f^{(n)}(x)$. |
| Factorial Notation | The notation $n!$ representing the product of all integers from $n$ down to 1. |

### 2. Why This Section Matters
Higher derivatives extend the concept of the derivative to analyze how rates of change themselves are changing. This is crucial in physics (acceleration is the rate of change of velocity, which is the second derivative of position). In curve sketching (Chapter 4), the second derivative helps determine the concavity and inflection points of a graph. For many functions, higher derivatives reveal patterns that simplify complex problems.

### 3. Core Cards

**Card 1: The Second Derivative**
- Type: Definition
- Statement: The second derivative of a function $f$, denoted $f''(x)$ or $\frac{d^2 f}{dx^2}$, is the derivative of the first derivative:
  $$
 f''(x) = \frac{d}{dx} (f'(x)) 
$$
- Conditions / scope: The first derivative must itself be differentiable.
- Note: The second derivative measures the rate at which the slope of the tangent line is changing. If $f''(x) > 0$, the slope of the graph is increasing.

**Card 2: Higher-Order Derivatives**
- Type: Definition
- Statement: The $n$th derivative of $f$, denoted $f^{(n)}(x)$ or $\frac{d^n f}{dx^n}$, is obtained by differentiating $f$ $n$ times:
  $$
 f^{(n)}(x) = \frac{d}{dx} \left( f^{(n-1)}(x) \right) 
$$
- Conditions / scope: The $(n-1)$th derivative must be differentiable.
- Note: For positive integer $n$, $f^{(n)}$ is defined recursively. The zeroth derivative is $f(x)$ itself. The notation uses parentheses to distinguish powers from derivatives ($f^3(x)$ vs $f^{(3)}(x)$).

**Card 3: Acceleration**
- Type: Definition/Application
- Statement: If $s(t)$ is the position of an object at time $t$, its acceleration $a(t)$ is the second derivative of position with respect to time:
  $$
 a(t) = v'(t) = s''(t) 
$$
- Conditions / scope: The velocity function must be differentiable.
- Note: Acceleration is measured in units of distance per time squared (e.g., $\text{m/s}^2$).

### 4. Methods and Techniques
- **Finding Patterns in Higher Derivatives:** For power functions $f(x) = x^{-n}$ or exponential functions $f(x) = e^x$, the higher derivatives often follow a predictable pattern (e.g., involving factorials). Identifying these patterns allows you to write a general formula for $f^{(n)}(x)$. For example, the $n$th derivative of $x^{-1}$ is $(-1)^n n! x^{-n-1}$.
- **Calculating Higher Derivatives:** To find $f^{(n)}(a)$, you perform successive differentiations. It is often helpful to simplify each derivative as much as possible before taking the next derivative.

### 5. Common Pitfalls
- ❌ **Mistake:** Misinterpreting the notation $f^{(n)}(x)$. It is the $n$th derivative of $f$, not $f$ raised to the $n$th power.
    - ✅ **Correct Understanding:** $f^{(3)}(x)$ means "differentiate $f$ three times". It is completely different from $(f(x))^3$ or $f^3(x)$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The second derivative is a "rate of a rate". Think of driving a car. Your position changes (first derivative = velocity). How your *speedometer* changes over time (second derivative = acceleration) tells you if you are pressing the gas or the brakes.
(b) **Visualization Suggestions:**
- **Component 1: Position, Velocity, and Acceleration Graphs**
    - *What it shows:* Three synchronized graphs: position $s(t)$, velocity $v(t)$, and acceleration $a(t)$. An animated point moves along the path, and the points on the other graphs move in sync.
    - *Parameters:* A time slider to move the point.
    - *Observation:* The user can see how the slope of the position graph is the velocity graph, and the slope of the velocity graph is the acceleration graph. For example, a falling object has a constant negative acceleration (gravity), causing its velocity to decrease linearly.
- **Component 2: Polynomial Derivative Tree**
    - *What it shows:* A list of functions: $f(x)$, $f'(x)$, $f''(x)$, $f'''(x)$, etc., for a given polynomial.
    - *Parameters:* A slider to increase the degree of a polynomial.
    - *Observation:* The user can observe that derivatives of a polynomial eventually reach 0 (e.g., the fourth derivative of $x^4$ is $24$, and the fifth derivative is 0, and all subsequent derivatives are 0).

### 7. Concept Self-Check (original)
**Q1.** If $s(t)$ is the position of a car, what is the physical interpretation of the sign of $s''(t)$?
- Answer: A positive $s''(t)$ means the car is accelerating (speeding up in the positive direction or slowing down in the negative). A negative $s''(t)$ means the car is decelerating (slowing down in the positive direction or speeding up in the negative).
- Explanation: $s''(t)$ is the acceleration. Its sign tells you if velocity is increasing or decreasing.

**Q2.** What is the second derivative of $f(x) = x^4$?
- Answer: $f''(x) = 12x^2$.
- Explanation: $f'(x) = 4x^3$, and differentiating again yields $f''(x) = 12x^2$.

**Q3.** What is the millionth derivative of $f(x) = e^x$?
- Answer: $e^x$.
- Explanation: The derivative of $e^x$ is always $e^x$, regardless of how many times you differentiate it.

**Q4.** What is the general formula for the $n$th derivative of $x^{-2}$?
- Answer: $f^{(n)}(x) = (-1)^n (n+1)! \cdot x^{-n-2}$.
- Explanation: This pattern can be observed by calculating the first few derivatives: $-2x^{-3}$, $6x^{-4}$, $-24x^{-5}$, etc. The coefficient involves $n$ factorial, and the exponent is $-n-2$.

**Q5.** True or False: For a polynomial of degree 5, the sixth derivative is zero.
- Answer: True.
- Explanation: The fifth derivative is a constant (5!). The derivative of a constant is zero. Therefore, all derivatives of order 6 and above are zero.

## 3.6 Differentiating the Trigonometric Family

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Radian | The standard unit of angular measure used in calculus; defined such that a full circle is $2\pi$ radians. |
| Derivative of Sine | The derivative of $\sin x$ is $\cos x$. |
| Derivative of Cosine | The derivative of $\cos x$ is $-\sin x$. |
| Derivative of Tangent | The derivative of $\tan x$ is $\sec^2 x$. |

### 2. Why This Section Matters
This section provides the derivative rules for the trigonometric functions. These rules are essential for solving problems in physics, engineering, and modeling oscillatory motion (like springs or pendulums). The derivation of the derivative of $\sin x$ relies on the fundamental trigonometric limit $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$, reinforcing the importance of the limit concept from Chapter 2.

### 3. Core Cards

**Card 1: Derivatives of Sine and Cosine**
- Type: Theorem
- Statement: The sine and cosine functions are differentiable, and their derivatives are:
  $$
 \frac{d}{dx} \sin x = \cos x 
$$
  $$
 \frac{d}{dx} \cos x = -\sin x 
$$
- Conditions / scope: These formulas are valid only when $x$ is measured in **radians**.
- Note: The proof uses the addition formulas for sine and cosine and the fundamental limits $\lim_{h \to 0} \frac{\sin h}{h} = 1$ and $\lim_{h \to 0} \frac{\cos h - 1}{h} = 0$.

**Card 2: Derivatives of the Other Trigonometric Functions**
- Type: Theorem
- Statement: The derivatives of the remaining trigonometric functions are:
  $$
 \frac{d}{dx} \tan x = \sec^2 x, \quad \frac{d}{dx} \cot x = -\csc^2 x 
$$
  $$
 \frac{d}{dx} \sec x = \sec x \tan x, \quad \frac{d}{dx} \csc x = -\csc x \cot x 
$$
- Conditions / scope: The functions are defined by their standard quotient identities ($\tan x = \frac{\sin x}{\cos x}$, etc.) and are differentiable everywhere on their domains.
- Note: All formulas assume $x$ is in radians.

### 4. Methods and Techniques
- **Differentiating Trigonometric Expressions:** Combine the new trig derivative rules with the Product, Quotient, and Chain Rules (learned later). For example, differentiating $y = x \sin x$ requires the Product Rule: $y' = (1)\sin x + x(\cos x) = \sin x + x \cos x$.
- **Finding Horizontal Tangents:** To find points where the tangent line to a trigonometric function is horizontal, set the derivative equal to zero and solve for $x$ within the given interval.

### 5. Common Pitfalls
- ❌ **Mistake:** Forgetting to use radians when evaluating trig limits or derivatives.
    - ✅ **Correct Understanding:** The formulas for the derivatives of trig functions are derived assuming angles are measured in radians. If you use degrees, the formulas would change significantly (e.g., the derivative of $\sin x$ would be $\frac{\pi}{180} \cos x$).
- ❌ **Mistake:** Confusing the derivatives of sine and cosine.
    - ✅ **Correct Understanding:** The derivative of sine is positive cosine. The derivative of cosine is negative sine. The minus sign is crucial for the cosine function.
- ❌ **Mistake:** Using the chain rule unnecessarily when a function is a product.
    - ✅ **Correct Understanding:** For $y = \sin x \cos x$, this is a product. You use the Product Rule, not the Chain Rule. The Chain Rule is used for compositions like $\sin(x^2)$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT explains why radians are used. The simple limit $\lim_{h \to 0} \frac{\sin h}{h} = 1$ is what makes the derivative of $\sin x$ exactly $\cos x$. If you used degrees, this limit would be $\frac{\pi}{180}$, leading to a messier derivative. The unit circle is the natural setting where the arc length corresponds to the angle in radians, making the rates of change "natural". The book's GRAPHICAL INSIGHT adds a visual sanity check: on $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$ the tangent lines to $y = \sin x$ have positive slope, exactly where $\cos x > 0$; on $(\tfrac{\pi}{2}, \tfrac{3\pi}{2})$ the slopes are negative, exactly where $\cos x < 0$; and the tangents are horizontal at $x = \pm\tfrac{\pi}{2}, \tfrac{3\pi}{2}$, exactly where $\cos x = 0$.

(b) **Visualization Suggestions:**
- **Component 1: Derivative of Sine and Cosine**
    - *What it shows:* Two synchronized graphs: $y = \sin x$ and $y = \cos x$. An animated point moves along the sine curve, and its tangent line is drawn. The slope of this tangent line is plotted as a point on the cosine graph.
    - *Parameters:* A slider to change $x$.
    - *Observation:* The user can see that the slope of the sine curve at any point is exactly the value of the cosine function at that same point.
- **Component 2: Tangent function and its derivative**
    - *What it shows:* The graph of $y = \tan x$ and $y = \sec^2 x$. Both have vertical asymptotes at the same $x$ values.
    - *Parameters:* Zoom in and out.
    - *Observation:* The derivative $\sec^2 x$ is always positive, reflecting that the tangent function is always increasing on its domain.

### 7. Concept Self-Check (original)
**Q1.** What is $\frac{d}{dx} (3 \sin x - 2 \cos x)$?
- Answer: $3 \cos x + 2 \sin x$.
- Explanation: Using the Linearity Rules and the derivatives of sine and cosine: $3 \cdot (\cos x) - 2 \cdot (-\sin x) = 3\cos x + 2\sin x$.

**Q2.** True or False: $\frac{d}{dx} \tan x = \csc^2 x$.
- Answer: False.
- Explanation: The correct derivative is $\sec^2 x$. The derivative of $\cot x$ is $-\csc^2 x$.

**Q3.** If $f(\theta) = \sec \theta$, what is $f'(\theta)$?
- Answer: $\sec \theta \tan \theta$.
- Explanation: Using the quotient rule on $\frac{1}{\cos \theta}$ leads to the formula $\sec \theta \tan \theta$.

**Q4.** Find the derivative of $y = e^x \sin x$.
- Answer: $y' = e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$.
- Explanation: This requires the Product Rule: $y' = (e^x)' \sin x + e^x (\sin x)' = e^x \sin x + e^x \cos x$.

**Q5.** Why is it important to use radians when calculating the derivative of $\sin x$?
- Answer: Because the fundamental limit $\lim_{h \to 0} \frac{\sin h}{h} = 1$ is true only when $h$ is in radians. If degrees were used, the limit would be $\frac{\pi}{180}$, resulting in a different derivative formula.
- Explanation: The entire proof of $(\sin x)' = \cos x$ hinges on that specific limit, which is tied to the definition of radians.

## 3.7 Compositions and the Chain Rule

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Composite Function | A function formed by applying one function to the result of another, denoted $f(g(x))$. |
| Chain Rule | A rule for differentiating composite functions: $(f(g(x)))' = f'(g(x)) g'(x)$. |
| General Power Rule | A special case of the Chain Rule for differentiating a function raised to a power: $\frac{d}{dx} [g(x)]^n = n[g(x)]^{n-1} g'(x)$. |
| General Exponential Rule | A special case of the Chain Rule for differentiating $e$ raised to a function: $\frac{d}{dx} e^{g(x)} = e^{g(x)} g'(x)$. |

### 2. Why This Section Matters
The Chain Rule is one of the most important rules in calculus. It allows us to differentiate complex functions made from compositions of simpler functions. Without it, differentiating functions like $\cos(x^3)$ or $\sqrt{x^4+1}$ would be incredibly difficult. It is also the mathematical basis for related rates (Section 3.10).

### 3. Core Cards

**Card 1: The Chain Rule**
- Type: Theorem
- Statement: If $f$ and $g$ are differentiable functions, then the composite function $f(g(x))$ is differentiable and its derivative is:
  $$
 (f(g(x)))' = f'(g(x)) \cdot g'(x) 
$$
- Conditions / scope: Both functions must be differentiable.
- Note: In words: "The derivative of the outside function evaluated at the inside, times the derivative of the inside function." In Leibniz notation: $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$, where $y = f(u)$ and $u = g(x)$.

**Card 2: General Power Rule**
- Type: Theorem
- Statement: A special case of the Chain Rule where the outside function is $u^n$:
  $$
 \frac{d}{dx} [g(x)]^n = n [g(x)]^{n-1} \cdot g'(x) 
$$
- Conditions / scope: $n$ is any real number, and $g(x)$ is differentiable.
- Note: This extends the Power Rule to work on *inside functions* rather than just $x$.

**Card 3: General Exponential Rule**
- Type: Theorem
- Statement: A special case of the Chain Rule where the outside function is $e^u$:
  $$
 \frac{d}{dx} e^{g(x)} = e^{g(x)} \cdot g'(x) 
$$
- Conditions / scope: $g(x)$ is differentiable.
- Note: This extends the exponential rule to composite functions.

### 4. Methods and Techniques
- **Identifying the "Outside" and "Inside":** To apply the Chain Rule, decompose the function into an "outer" function $f$ and an "inner" function $g$. Differentiate the outer function, keep the inner function unchanged, and then multiply by the derivative of the inner function.
- **Applying the Chain Rule Multiple Times:** If a function has multiple nested layers (e.g., $\sqrt{1 + \sqrt{x^2+1}}$), apply the Chain Rule repeatedly, starting from the outermost layer and working inward.
- **Using Leibniz Notation for Related Rates:** The Chain Rule in Leibniz form ($\frac{dy}{dt} = \frac{dy}{dx} \frac{dx}{dt}$) is the primary tool used to solve related rates problems by linking different rates of change.

### 5. Common Pitfalls
- ❌ **Mistake:** Forgetting to multiply by the derivative of the inside function ($g'(x)$).
    - ✅ **Correct Understanding:** The chain rule is not just $f'(g(x))$. It is always $f'(g(x)) \cdot g'(x)$. A common error is to write $2 \sin x$ as the derivative of $\sin^2 x$, whereas the correct derivative is $2 \sin x \cdot \cos x$.
- ❌ **Mistake:** Confusing when to use the Product Rule versus the Chain Rule.
    - ✅ **Correct Understanding:** The Product Rule is for products (e.g., $x^2 \sin x$). The Chain Rule is for compositions (e.g., $\sin(x^2)$). In $\sin(x^2)$, the sine function "wraps around" the $x^2$, making it a composition.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT highlights the Leibniz notation as a guide. While $dy/du$ and $du/dx$ are not fractions, they behave like them. This notation allows us to visualize the Chain Rule as "rates of change multiplying." Imagine a chain of processes: If your salary increases twice as fast as your friend's, and your friend's salary increases $4000/year, your salary increases at $2 \times 4000 = \$8000/\text{year}$. The rates multiply.

(b) **Visualization Suggestions:**
- **Component 1: Chain Rule Visualizer**
    - *What it shows:* Three graphs stacked vertically: $y = f(u)$, $u = g(x)$, and $y = f(g(x))$. A point is animated on the $x$-axis, and the corresponding points and slopes on the other graphs are shown.
    - *Parameters:* Slider to change $x$.
    - *Observation:* The user can see the slope of the final composite graph is the product of the slopes of the two intermediate graphs: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.

### 7. Concept Self-Check (original)
**Q1.** What is the derivative of $y = (3x^2 + 1)^5$?
- Answer: $y' = 5(3x^2 + 1)^4 \cdot (6x) = 30x(3x^2 + 1)^4$.
- Explanation: Using the General Power Rule (a special case of the Chain Rule), the outside function is $u^5$, the inside is $3x^2 + 1$.

**Q2.** True or False: $\frac{d}{dx} \cos(x^3) = -\sin(x^3)$.
- Answer: False.
- Explanation: The Chain Rule requires multiplying by the derivative of the inside function ($x^3$): $\frac{d}{dx} \cos(x^3) = -\sin(x^3) \cdot 3x^2 = -3x^2 \sin(x^3)$.

**Q3.** In the Leibniz notation $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$, what is the role of $u$?
- Answer: $u$ is the "inside" function that links the independent variable $x$ to the final dependent variable $y$.
- Explanation: It represents the intermediate step in the composition of functions, allowing us to break the derivative into two manageable parts.

**Q4.** What is the derivative of $y = e^{\sin x}$?
- Answer: $y' = e^{\sin x} \cdot \cos x$.
- Explanation: Using the General Exponential Rule, the derivative of $e^{\sin x}$ is $e^{\sin x}$ times the derivative of $\sin x$.

**Q5.** To find the derivative of $f(x) = \sqrt{\tan x}$, what is the "inside" function and what is the "outside" function?
- Answer: The outside function is $\sqrt{u} = u^{1/2}$. The inside function is $u = \tan x$.
- Explanation: Differentiate the outside to get $\frac{1}{2} (\tan x)^{-1/2}$, and multiply by the derivative of the inside, $\sec^2 x$.

## 3.8 When y Isn't Isolated: Implicit Differentiation

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Implicitly Defined Function | A function $y = f(x)$ that is defined by an equation relating $x$ and $y$ (e.g., $x^2 + y^2 = 1$) rather than an explicit formula $y = \dots$. |
| Implicit Differentiation | The process of differentiating both sides of an implicit equation with respect to $x$ and solving for $y'$. |
| Branch | A part of the graph of an implicit equation that can be represented by a single function. |
| Inverse Trigonometric Derivatives | The derivatives of $\sin^{-1}x$, $\cos^{-1}x$, $\tan^{-1}x$, etc., derived using implicit differentiation. |

### 2. Why This Section Matters
Many interesting curves cannot be easily solved for $y$ to find the slope of a tangent line (e.g., the folium of Descartes $x^3 + y^3 = 3xy$). Implicit differentiation provides a method to find $dy/dx$ directly from the equation, even when $y$ is not isolated. It is also the key to deriving the derivatives of inverse trigonometric functions and general logarithmic functions.

### 3. Core Cards

**Card 1: Implicit Differentiation Technique**
- Type: Method
- Statement: To find $dy/dx$ from an equation relating $x$ and $y$:
    1. Differentiate both sides of the equation with respect to $x$, treating $y$ as a function of $x$ (i.e., use the Chain Rule for any term containing $y$).
    2. Solve the resulting equation for $\frac{dy}{dx}$ by collecting terms containing $dy/dx$ on one side and all other terms on the other side.
- Conditions / scope: The equation must define $y$ implicitly as a differentiable function of $x$.
- Note: You must include a factor of $y'$ (or $\frac{dy}{dx}$) whenever you differentiate a term involving $y$. For example, $\frac{d}{dx} y^2 = 2y \frac{dy}{dx}$.

**Card 2: Derivatives of Inverse Trigonometric Functions**
- Type: Theorem
- Statement: The derivatives of the inverse trigonometric functions are:
  $$
 \frac{d}{dx} \sin^{-1} x = \frac{1}{\sqrt{1-x^2}}, \quad \frac{d}{dx} \cos^{-1} x = -\frac{1}{\sqrt{1-x^2}} 
$$
  $$
 \frac{d}{dx} \tan^{-1} x = \frac{1}{1+x^2}, \quad \frac{d}{dx} \cot^{-1} x = -\frac{1}{1+x^2} 
$$
  $$
 \frac{d}{dx} \sec^{-1} x = \frac{1}{|x|\sqrt{x^2-1}}, \quad \frac{d}{dx} \csc^{-1} x = -\frac{1}{|x|\sqrt{x^2-1}} 
$$
- Conditions / scope: Each formula is valid on the domain of its respective inverse function.
- Note: These are derived using implicit differentiation. For example, to find the derivative of $\sin^{-1}x$, you set $y = \sin^{-1}x$, which implies $\sin y = x$. Differentiating implicitly with respect to $x$ gives $\cos y \cdot y' = 1 \implies y' = \frac{1}{\cos y} = \frac{1}{\sqrt{1-x^2}}$.

### 4. Methods and Techniques
- **Calculating Slope at a Point:** You can often find the slope $dy/dx$ at a specific point by substituting the point's coordinates directly into the differentiated equation and solving for $y'$, rather than solving for $y'$ in terms of $x$ and $y$ first. This is shown in Example 4 of the text.
- **Finding Higher Derivatives Implicitly:** To find $y''$ for an implicit equation, differentiate the equation again with respect to $x$, but use the previously found expression for $y'$ to substitute into the result. This yields an expression for $y''$ in terms of $x$ and $y$.

### 5. Common Pitfalls
- ❌ **Mistake:** Forgetting to apply the Chain Rule to terms containing $y$.
    - ✅ **Correct Understanding:** When differentiating an equation with respect to $x$, every $y$ term generates a $y'$ factor. For example, $\frac{d}{dx} y^3 = 3y^2 y'$, not just $3y^2$.
- ❌ **Mistake:** Substituting a specific value for a variable before differentiating.
    - ✅ **Correct Understanding:** You must differentiate the entire equation first, treating $y$ as an unknown function of $x$. Substituting a value like $x=2$ before differentiating would treat $x$ as a constant, making $dx/dx = 0$ and rendering the derivative meaningless.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT explains that an implicit equation often defines several different functions (or "branches") for different parts of the graph. For example, the equation of a circle $x^2 + y^2 = 1$ defines two branches: the top half $y = \sqrt{1-x^2}$ and the bottom half $y = -\sqrt{1-x^2}$. Implicit differentiation works because it applies to all of these branches simultaneously, treating $y$ as a general function that locally can be any of them.

(b) **Visualization Suggestions:**
- **Component 1: Implicit Curve and Tangent Line**
    - *What it shows:* A graph of an implicit curve like the folium $x^3 + y^3 = 3xy$. A point $P$ is placed on the curve.
    - *Parameters:* Slider to change the coordinates of $P$ along the curve.
    - *Observation:* The user can choose a point and see the tangent line drawn. The slope of the tangent line is calculated using implicit differentiation and matches the visual slope. This confirms the technique works even though the curve cannot be easily solved for $y$.
- **Component 2: Branches of Implicit Curves**
    - *What it shows:* A graph of an implicit equation that defines multiple branches, like a circle or a loop. Each branch is highlighted in a different color.
    - *Parameters:* None.
    - *Observation:* The user can see that the graph is made of several distinct functions. Implicit differentiation produces a derivative formula that works for all branches simultaneously.

### 7. Concept Self-Check (original)
**Q1.** What is $\frac{d}{dx} (3x^2 y^4)$?
- Answer: $6x y^4 + 12x^2 y^3 \frac{dy}{dx}$.
- Explanation: This uses the Product Rule and the Chain Rule. Differentiate $3x^2$ (giving $6x$) and keep $y^4$, then keep $3x^2$ and differentiate $y^4$ (giving $4y^3 y'$).

**Q2.** If $y^2 + x^2 = 25$, what is $\frac{dy}{dx}$?
- Answer: $\frac{dy}{dx} = -\frac{x}{y}$.
- Explanation: Differentiating both sides gives $2y y' + 2x = 0$. Solving for $y'$ gives $y' = -\frac{x}{y}$.

**Q3.** What is the derivative of $y = \tan^{-1}(x^2)$?
- Answer: $\frac{2x}{1 + x^4}$.
- Explanation: Using the Chain Rule: $\frac{d}{dx} \tan^{-1}(x^2) = \frac{1}{1 + (x^2)^2} \cdot \frac{d}{dx}(x^2) = \frac{2x}{1 + x^4}$.

**Q4.** True or False: To find $dy/dx$ at the point $(2, 3)$ on a curve, you must first solve for $dy/dx$ in terms of $x$ and $y$, then substitute $x=2$ and $y=3$.
- Answer: False.
- Explanation: You can differentiate both sides of the equation (without isolating $y$) and then substitute $x=2$ and $y=3$ immediately into the resulting equation to solve for $y'$ at that specific point. This often saves algebra.

**Q5.** When differentiating an implicit equation with respect to $x$, what is the difference between differentiating $x^2$ and differentiating $y^2$?
- Answer: $\frac{d}{dx} x^2 = 2x$, while $\frac{d}{dx} y^2 = 2y \frac{dy}{dx}$.
- Explanation: $x$ is treated as the independent variable, so its derivative is straightforward. $y$ is treated as a function of $x$, so the Chain Rule is required.

## 3.9 Exponentials and Logarithms of Any Base

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Natural Logarithm | The logarithm with base $e$, denoted $\ln x$. |
| General Exponential Function | A function of the form $b^x$, where $b > 0$ is a constant base. |
| Logarithmic Differentiation | A technique for differentiating complicated products, quotients, or functions of the form $f(x)^{g(x)}$ by taking the natural logarithm first. |
| Hyperbolic Functions | Functions defined in terms of $e^x$ and $e^{-x}$ (e.g., $\sinh x$, $\cosh x$), which have properties similar to trigonometric functions. |

### 2. Why This Section Matters
This section completes the differentiation rules for all elementary functions. Understanding the derivatives of $b^x$ and $\log_b x$ is essential for solving problems involving exponential growth and decay. Logarithmic differentiation simplifies the process of differentiating complex rational expressions and functions with variable bases and exponents. It also introduces the hyperbolic functions, which are widely used in engineering and physics.

### 3. Core Cards

**Card 1: Derivative of the Natural Logarithm**
- Type: Theorem
- Statement: The derivative of the natural logarithm is:
  $$
 \frac{d}{dx} \ln x = \frac{1}{x} \quad (x > 0) 
$$
- Conditions / scope: Only valid for $x > 0$.
- Note: This is derived using implicit differentiation. Let $y = \ln x$. Then $e^y = x$. Differentiating implicitly yields $e^y y' = 1 \implies y' = \frac{1}{e^y} = \frac{1}{x}$.

**Card 2: Derivatives of General Exponentials and Logarithms**
- Type: Theorem
- Statement: For any positive constant base $b \neq 1$:
  $$
 \frac{d}{dx} b^x = (\ln b) b^x 
$$
  $$
 \frac{d}{dx} \log_b x = \frac{1}{x \ln b} 
$$
- Conditions / scope: $b > 0$, $b \neq 1$. The logarithm formula requires $x > 0$.
- Note: These are derived using the change-of-base formulas $b^x = e^{x \ln b}$ and $\log_b x = \frac{\ln x}{\ln b}$.

**Card 3: Logarithmic Differentiation**
- Type: Method
- Statement: To find the derivative of a complicated function $y = f(x)$:
    1. Take the natural logarithm of both sides: $\ln y = \ln f(x)$.
    2. Simplify the right-hand side using logarithm rules (e.g., $\ln(ab) = \ln a + \ln b$).
    3. Differentiate both sides implicitly with respect to $x$, using $\frac{d}{dx} \ln y = \frac{y'}{y}$.
    4. Solve for $y'$ by multiplying both sides by $y$.
- Conditions / scope: Ideal for functions with many factors (products/quotients) or functions of the form $f(x)^{g(x)}$.
- Note: This method often simplifies complex algebra by converting multiplication into addition.

**Card 4: Derivatives of Hyperbolic Functions**
- Type: Formula
- Statement: The derivatives of the hyperbolic functions are:
  $$
 \frac{d}{dx} \sinh x = \cosh x, \quad \frac{d}{dx} \cosh x = \sinh x 
$$
  $$
 \frac{d}{dx} \tanh x = \operatorname{sech}^2 x, \quad \frac{d}{dx} \coth x = -\operatorname{csch}^2 x 
$$
  $$
 \frac{d}{dx} \operatorname{sech} x = -\operatorname{sech} x \tanh x, \quad \frac{d}{dx} \operatorname{csch} x = -\operatorname{csch} x \coth x 
$$
- Conditions / scope: These are derived using the definitions $\sinh x = \frac{e^x - e^{-x}}{2}$ and $\cosh x = \frac{e^x + e^{-x}}{2}$.
- Note: These formulas are very similar to those for the standard trigonometric functions, with some sign changes.

**Card 5: Derivatives of Inverse Hyperbolic Functions**
- Type: Formula
- Statement: Each inverse hyperbolic function is differentiable on its domain:

| Function | Domain | Derivative |
|---|---|---|
| $\sinh^{-1} x$ | all $x$ | $\dfrac{1}{\sqrt{x^2+1}}$ |
| $\cosh^{-1} x$ | $x \ge 1$ | $\dfrac{1}{\sqrt{x^2-1}}$ |
| $\tanh^{-1} x$ | $\lvert x \rvert < 1$ | $\dfrac{1}{1-x^2}$ |
| $\coth^{-1} x$ | $\lvert x \rvert > 1$ | $\dfrac{1}{1-x^2}$ |
| $\operatorname{sech}^{-1} x$ | $0 < x \le 1$ | $-\dfrac{1}{x\sqrt{1-x^2}}$ |
| $\operatorname{csch}^{-1} x$ | $x \neq 0$ | $-\dfrac{1}{\lvert x \rvert\sqrt{x^2+1}}$ |

- Conditions / scope: Note that $\tanh^{-1} x$ and $\coth^{-1} x$ share the same derivative formula $\frac{1}{1-x^2}$ but on disjoint domains ($\lvert x \rvert < 1$ vs. $\lvert x \rvert > 1$).
- Note: These follow from implicit differentiation applied to the defining equations (e.g., $y = \sinh^{-1} x \implies \sinh y = x$).

### 4. Methods and Techniques
- **Differentiating a Function of the Form $u(x)^{v(x)}$:** Use logarithmic differentiation. Take $\ln y = v(x) \ln u(x)$, differentiate, and solve for $y'$. This is the only reliable method for variable exponents.
- **Simplifying Powers and Products:** Using logarithm rules can simplify differentiation. For example, differentiating $f(x) = x^2 \sqrt{x^2 + 1}$ can be made much easier by first writing $\ln f(x) = 2 \ln x + \frac{1}{2} \ln(x^2 + 1)$.

### 5. Common Pitfalls
- ❌ **Mistake:** Trying to use the Power Rule for functions like $x^x$.
    - ✅ **Correct Understanding:** The Power Rule is for $x^n$ (constant exponent). For $x^x$ (variable exponent), you must use logarithmic differentiation (or rewrite as $e^{x \ln x}$).
- ❌ **Mistake:** Forgetting the absolute value in $\frac{d}{dx} \ln |x|$.
    - ✅ **Correct Understanding:** The derivative of $\ln |x|$ is $\frac{1}{x}$ for all $x \neq 0$ (the absolute value is usually handled implicitly).
- ❌ **Mistake:** Using $\ln b$ in the derivative of $e^x$.
    - ✅ **Correct Understanding:** $e^x$ is the special case where the base $b = e$. Since $\ln e = 1$, the derivative is just $e^x$. For a general base $b$, the derivative is $(\ln b) b^x$.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT explains why $e$ is the "natural" base for calculus. While any base $b$ can be used to construct exponential functions, the calculus formulas for derivatives are cleanest for $e$. This is because $\ln e = 1$. The function $e^x$ is the unique function that is its own derivative, which makes it incredibly useful in modeling natural processes where the rate of change is proportional to the current value.

(b) **Visualization Suggestions:**
- **Component 1: Comparing Exponential Derivatives**
    - *What it shows:* The graph of $y = b^x$ and its derivative $y' = (\ln b)b^x$ for various values of $b$. The slope at $x=0$ is highlighted.
    - *Parameters:* A slider to change the base $b$ from 0.5 to 10.
    - *Observation:* As $b$ approaches $e \approx 2.718$, the slope of the curve at $x=0$ approaches 1, and the curve of the derivative coincides with the curve of the original function.
- **Component 2: Logarithmic Differentiation Walkthrough**
    - *What it shows:* A step-by-step visualization of differentiating $y = \frac{x^2 \sin x}{\sqrt{x+1}}$.
    - *Parameters:* Buttons to step through the logarithmic differentiation process: "Take $\ln$", "Expand logs", "Differentiate", "Solve for $y'$".
    - *Observation:* The user can see how the complex operation of differentiating a quotient/product is reduced to simpler operations of differentiating logarithmic terms.

### 7. Concept Self-Check (original)
**Q1.** What is the derivative of $y = \ln(x^2 + 1)$?
- Answer: $\frac{2x}{x^2 + 1}$.
- Explanation: Using the Chain Rule with the natural log formula: $\frac{1}{x^2 + 1} \cdot 2x$.

**Q2.** What is the derivative of $y = 3^{x}$?
- Answer: $y' = (\ln 3) 3^x$.
- Explanation: Using the formula for the derivative of a general exponential function with base $b = 3$.

**Q3.** Explain how you would differentiate $y = x^x$ using logarithmic differentiation.
- Answer: Take $\ln y = x \ln x$. Differentiating implicitly gives $\frac{y'}{y} = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$. Solving for $y'$ gives $y' = y (\ln x + 1) = x^x (\ln x + 1)$.
- Explanation: This method avoids the invalid use of the Power Rule.

**Q4.** True or False: $(\cosh x)' = \sinh x$.
- Answer: True.
- Explanation: By definition, $\cosh x = \frac{e^x + e^{-x}}{2}$. Its derivative is $\frac{e^x - e^{-x}}{2} = \sinh x$.

**Q5.** What is the derivative of $y = \log_2 (x)$?
- Answer: $\frac{1}{x \ln 2}$.
- Explanation: Using the general logarithm rule $\frac{d}{dx} \log_b x = \frac{1}{x \ln b}$ with $b=2$.

## 3.10 Linked Quantities: Related Rates

### 1. Key Terms
| Term | Plain-English meaning (one line) |
|---|---|
| Related Rates | A problem where the rates of change of two or more variables are linked by a mathematical equation. |
| Geometric Constraints | Fixed relationships between variables given by geometry (e.g., a ladder leaning against a wall forms a right triangle, so $x^2 + h^2 = L^2$). |

### 2. Why This Section Matters
Related rates problems are a direct application of the Chain Rule to real-world situations. They allow us to find how one rate of change affects another. For example, if we know how fast the volume of a spherical balloon is increasing, we can find how fast its radius is increasing. These problems are common in physics, engineering, and economics.

### 3. Core Cards

**Card 1: The Three-Step Method for Related Rates**
- Type: Method
- Statement:
    1.  **Identify variables and rates:** Draw a diagram and define all variables (e.g., $r$, $h$, $V$). Identify the known rate (e.g., $\frac{dV}{dt} = 5$) and the unknown rate to find (e.g., $\frac{dh}{dt}$).
    2.  **Find an equation relating variables:** Determine a geometric or physical equation that connects the variables (e.g., $V = \pi r^2 h$). Differentiate this equation with respect to time $t$, using the Chain Rule. **Do not substitute numerical values for the variables yet.**
    3.  **Use given information to solve:** Substitute the specific known values for the variables and known rates into the differentiated equation and solve for the unknown rate.
- Conditions / scope: Requires all variables to be differentiable functions of $t$ and the geometric relationship to hold for all time.
- Note: This method is a direct application of the Chain Rule.

### 4. Methods and Techniques
- **Translating word problems into equations:** Identify constant quantities (e.g., the length of a ladder) and changing quantities (position of the base, position of the top). Formulate a geometric equation (like the Pythagorean Theorem) that relates the changing quantities.
- **Differentiating Geometries:** Know the volume formulas for common shapes (sphere, cone, cylinder) and how to differentiate them with respect to time.
- **Using Similar Triangles:** For problems involving cones or shadows, similar triangles are often used to express one variable in terms of another before differentiating.

### 5. Common Pitfalls
- ❌ **CAUTION:** Substituting specific variable values before differentiating.
    - ✅ **Correct Understanding:** You must differentiate the **general** equation first. If you plug in values like $x=5$ before differentiating, you treat $x$ as a constant, making its derivative $dx/dt = 0$, which will lead to a completely wrong answer.
- ❌ **Mistake:** Forgetting to apply the Chain Rule when differentiating with respect to $t$.
    - ✅ **Correct Understanding:** Every variable (like $V$, $r$, $h$, $x$) is a function of $t$. Therefore, differentiating $V$ yields $\frac{dV}{dt}$, differentiating $r^2$ yields $2r \frac{dr}{dt}$, etc.
- ❌ **Mistake:** Missing the sign of a rate of change.
    - ✅ **Correct Understanding:** A rate like $\frac{dx}{dt}$ is negative if the quantity $x$ is decreasing. For example, if the top of a ladder is sliding *down*, its height $h$ is decreasing, so $\frac{dh}{dt}$ is negative.

### 6. Intuition and Visualization Suggestions
(a) **Intuition:** The CONCEPTUAL INSIGHT regarding the sliding ladder problem points out a physical limitation of mathematical models. The equation $x^2 + h^2 = L^2$ implies that as $h \to 0$, the rate $dh/dt$ becomes infinite. In reality, physics dictates that the ladder will lose contact with the wall before $h$ reaches zero, breaking the mathematical model. This highlights the importance of understanding the physical bounds of an application.

(b) **Visualization Suggestions:**
- **Component 1: Sliding Ladder Simulation**
    - *What it shows:* A ladder leaning against a wall. The bottom of the ladder (distance $x$) slides away from the wall at a constant speed. The top of the ladder (height $h$) slides down. The instantaneous velocities $dx/dt$ and $dh/dt$ are displayed.
    - *Parameters:* Animate the sliding process.
    - *Observation:* The top of the ladder speeds up as it falls, while the bottom moves at a constant speed. This visualizes the relationship $\frac{dh}{dt} = -\frac{x}{h} \frac{dx}{dt}$.
- **Component 2: Filling a Conical Container Simulation**
    - *What it shows:* A conical tank filling with water at a constant rate. The volume $V$, height of water $h$, and rates $dV/dt$ and $dh/dt$ are displayed.
    - *Parameters:* The fill rate $dV/dt$ can be adjusted.
    - *Observation:* As the water level $h$ rises, the radius $r$ at the surface increases. The rate $dh/dt$ slows down as the container becomes wider, demonstrating the geometric relationship.

### 7. Concept Self-Check (original)
**Q1.** A spherical balloon is being inflated. Which two rates are related in the equation $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$?
- Answer: The rate of change of volume ($\frac{dV}{dt}$) and the rate of change of radius ($\frac{dr}{dt}$).
- Explanation: This equation came from differentiating the volume formula $V = \frac{4}{3}\pi r^3$ with respect to $t$.

**Q2.** Why must you wait until the final step to substitute values like $r = 5$ into a related rates equation?
- Answer: Because $r$ is a variable that changes with time. If you substitute $r=5$ into the equation before differentiating, you are treating $r$ as a constant, making its derivative $0$, which would invalidate the problem.
- Explanation: You must first establish the general relationship between the rates ($\frac{dV}{dt}$ and $\frac{dr}{dt}$), and then plug in the specific values to find the required rate at that moment.

**Q3.** A ladder sliding down a wall has its bottom $x$ moving at $3$ ft/s and its top $h$ moving at $-4$ ft/s. If the ladder is 5 ft long, what is $x$ at this instant?
- Answer: $x = 4$ ft.
- Explanation: Using $x^2 + h^2 = 25$ and differentiating gives $2x(3) + 2h(-4) = 0$, so $6x = 8h \implies h = 0.75x$. Substituting back into the Pythagorean theorem: $x^2 + (0.75x)^2 = 25 \implies 1.5625 x^2 = 25 \implies x^2 = 16 \implies x = 4$.

**Q4.** The volume of a cone is given by $V = \frac{1}{3} \pi r^2 h$. If $h$ is constant, what is the formula for $\frac{dV}{dt}$?
- Answer: $\frac{dV}{dt} = \frac{2}{3} \pi r h \frac{dr}{dt}$.
- Explanation: Since $h$ is constant, its derivative with respect to time is 0. Differentiating $r^2$ yields $2r \frac{dr}{dt}$.

**Q5.** When solving a related rates problem, what does the equation $\frac{dL}{dt} = 0$ usually mean?
- Answer: It means the length $L$ is a constant.
- Explanation: In problems like the sliding ladder or the farmer pulling a rope, the total length of the ladder or rope is a fixed constant. Since it doesn't change, its rate of change is zero.

---
## Part 3: Chapter Quick-Reference Sheet

## Chapter 3 Quick Reference

### 3.1 Slope at a Point: Defining the Derivative
- **Derivative Definition:** $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x-a}$.
- **Tangent Line Equation:** $y - f(a) = f'(a)(x-a)$.
- **Differentiability:** Function is differentiable if the limit exists. Differentiability $\implies$ Continuity. (Corner or vertical tangent implies non-differentiability).
- **Approximation:** $f'(x) \approx \frac{f(x+h) - f(x)}{h}$ for small $h$.

### 3.2 From One Slope to a Slope Function
- **Power Rule:** $\frac{d}{dx} x^n = n x^{n-1}$ (for any real $n$).
- **Linearity Rules:** $(f \pm g)' = f' \pm g'$, $(cf)' = c f'$.
- **Exponential Rule:** $\frac{d}{dx} e^x = e^x$.
- **Differentiability vs Continuity:** Continuity does not imply differentiability. $f(x)=|x|$ is continuous but not differentiable at $0$ (corner). $f(x)=x^{1/3}$ is not differentiable at $0$ (vertical tangent).
- **Local Linearity:** If $f'(a)$ exists, the graph looks like a straight line when zoomed in at $(a, f(a))$.

### 3.3 Differentiating Products and Quotients
- **Product Rule:** $(fg)' = f'g + fg'$.
- **Quotient Rule:** $\left(\frac{f}{g}\right)' = \frac{g f' - f g'}{g^2}$, for $g(x) \neq 0$.
- **Tip:** Simplify algebraically before applying rules when possible.

### 3.4 What Derivatives Measure: Rates of Change
- **Instantaneous Rate of Change:** Derivative $f'(x)$. Units: (units of $y$) per (units of $x$).
- **Motion:** $v(t) = s'(t)$ (velocity), Speed $= |v(t)|$.
- **Gravity:** $s(t) = s_0 + v_0 t - \frac{1}{2} g t^2$, $v(t) = v_0 - gt$.
- **Marginal Cost:** Approximate cost of one extra unit: $C'(x_0) \approx C(x_0+1) - C(x_0)$.

### 3.5 Derivatives of Derivatives
- **Definitions:** $f''(x) = \frac{d}{dx}(f'(x)) = \frac{d^2 f}{dx^2}$. $f^{(n)}(x)$ is the $n$th derivative.
- **Acceleration:** $a(t) = s''(t)$.
- **Polynomial Property:** For a polynomial of degree $k$, $f^{(n)}(x) = 0$ for $n > k$.
- **Exponential Property:** For $f(x) = e^x$, $f^{(n)}(x) = e^x$ for all $n$.

### 3.6 Differentiating the Trigonometric Family
- **Primary:** $\frac{d}{dx} \sin x = \cos x$, $\frac{d}{dx} \cos x = -\sin x$.
- **Secondary:** $\frac{d}{dx} \tan x = \sec^2 x$, $\frac{d}{dx} \cot x = -\csc^2 x$, $\frac{d}{dx} \sec x = \sec x \tan x$, $\frac{d}{dx} \csc x = -\csc x \cot x$.
- **Crucial:** All formulas assume **radians** are used for $x$.

### 3.7 Compositions and the Chain Rule
- **Chain Rule (Function form):** $(f(g(x)))' = f'(g(x)) g'(x)$.
- **Chain Rule (Leibniz form):** $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$.
- **General Power Rule:** $\frac{d}{dx} [g(x)]^n = n [g(x)]^{n-1} g'(x)$.
- **General Exponential Rule:** $\frac{d}{dx} e^{g(x)} = e^{g(x)} g'(x)$.

### 3.8 When y Isn't Isolated: Implicit Differentiation
- **Method:** Differentiate both sides of an implicit equation with respect to $x$, treating $y$ as a function of $x$ (add $y'$ to any $y$ term), then solve for $y'$.
- **Inverse Trig Derivatives:** $\frac{d}{dx} \sin^{-1} x = \frac{1}{\sqrt{1-x^2}}$, $\frac{d}{dx} \tan^{-1} x = \frac{1}{1+x^2}$, $\frac{d}{dx} \sec^{-1} x = \frac{1}{|x|\sqrt{x^2-1}}$ (plus the corresponding negative forms for $\cos^{-1}$, $\cot^{-1}$, $\csc^{-1}$).

### 3.9 Exponentials and Logarithms of Any Base
- **Natural Log:** $\frac{d}{dx} \ln x = \frac{1}{x}$.
- **General Exp/Log:** $\frac{d}{dx} b^x = (\ln b) b^x$, $\frac{d}{dx} \log_b x = \frac{1}{x \ln b}$.
- **Logarithmic Differentiation:** For complex products or $y = u(x)^{v(x)}$, take $\ln y$ of both sides first, differentiate, and solve for $y'$.
- **Hyperbolic Functions:** $\frac{d}{dx} \sinh x = \cosh x$, $\frac{d}{dx} \cosh x = \sinh x$, $\frac{d}{dx} \tanh x = \operatorname{sech}^2 x$.
- **Inverse Hyperbolic:** $\frac{d}{dx} \sinh^{-1} x = \frac{1}{\sqrt{x^2+1}}$, $\frac{d}{dx} \cosh^{-1} x = \frac{1}{\sqrt{x^2-1}}$ ($x \ge 1$), $\frac{d}{dx} \tanh^{-1} x = \frac{1}{1-x^2}$ ($\lvert x \rvert < 1$), $\frac{d}{dx} \operatorname{sech}^{-1} x = -\frac{1}{x\sqrt{1-x^2}}$, $\frac{d}{dx} \operatorname{csch}^{-1} x = -\frac{1}{\lvert x \rvert\sqrt{x^2+1}}$.

### 3.10 Linked Quantities: Related Rates
- **Process:**
    - 1. Identify variables and known/unknown rates.
    - 2. Relate variables with an equation. **Do not** substitute numerical values yet.
    - 3. Differentiate the equation with respect to $t$.
    - 4. Substitute the known values and solve for the unknown rate.
- **Constraint:** Remember to apply the Chain Rule to every variable that is a function of $t$.
