---
title: 'Quadtree Spatial Partitioning'
date: 'September 17, 2023'
excerpt: 'This QuadTree project is a Python adaptation of Daniel Shiffman´s (also known as Coding Train) QuadTree examples.'
tags: 'python;algorithms'
cover_image: '/images/posts/quadtree.png'
---

<a href="https://github.com/Cbonief/Quadtree">GitHub Repo</a>

This QuadTree project is a Python adaptation of Daniel Shiffman's (also known as Coding Train) QuadTree examples. A QuadTree is a space partitioning structure that streamlines the process of searching for specific points within a designated area. This specially helpful when you need to know the particles that are in a given region. Instead of checking all particles, you only check the ones whose position in the quadtree instersects with the region you are querying from.

<img class='control-sim-panel' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Point_quadtree.svg/300px-Point_quadtree.svg.png'>

Check out the original concept in this <a href="https://www.youtube.com/watch?v=OJxEcs0w_kE">Video</a> by Daniel Shiffman.

Here in an example of the quadtree optimization collision detection. The particles light up when they have detected a collision. In a naive implementation we would check all particles against one another, O(n²). Even though the quadtree adds an overhead of creating the tree, it still takes less comparisions in total, improving the framerate.

<img class='quadtree-gif' src='/images/quadtree.gif'></img>

## How to use

To get started with this QuadTree implementation:

1. Clone the repository:
```bash
git clone https://github.com/Cbonief/Quadtree
```

2. Install dependecies:
```bash
pip install -r requirements.txt
```
4. Navigate to the examples directory and run either of the test files to see the QuadTree in action:
```bash
python test_collision.py
```
or
```bash
python test_visualization.py
```

**Note:** In the collision example, press the mouse button to toggle between using the QTree or the default mechanism.

Using the Quadtree is straightforward. Initialize a boundary using the `Rectangle` class, define the capacity for each Quadtree node, and then you can start inserting points and querying regions.

```python
# Define a boundary and initialize the Quadtree
boundary = Rectangle((0, 0), (100, 100))
qt = Quadtree(boundary, capacity=4)

# Insert a point
point = Point((50, 50))
qt.insert(point)

# Query for points within a region
region = Rectangle((40, 40), (20, 20))
found_points = qt.query(region)
```

If you wish to extend or modify the behavior, you can subclass the `Quadtree` or other classes and implement your own methods or override existing ones. This modular design ensures that developers can adapt the structure to their specific needs without altering the core logic.

<br>
<br>

# Main Structure
The data structure is primarily composed of `Point`, `Rectangle`, `Circle`, and the main `Quadtree` classes. The `Point` represents a 2D point, `Rectangle` and `Circle` represent geometric shapes that help in defining boundaries and regions, and `Quadtree` represents the hierarchical data structure itself.

```python
class Point:
    # Represents a 2D point with coordinates (x, y) and optional additional data.

class Rectangle:
    # Defines a rectangle with center (x, y), width (w), and height (h).
    # Contains methods for point containment and rectangle intersection.

class Circle:
    # Represents a circle with center (x, y) and radius (r).
    # Provides methods for point containment and intersection with rectangles.

class Quadtree:
    # Hierarchical structure for 2D space partitioning. Each node can subdivide
    # into four quadrants. Supports point insertion and region querying.

```