import Imgfluid from "./Imgfluid";

const qnadata = [
    {
        question:
            "A thin uniform rod \\(A B\\) of mass \\(m=1 \\mathrm{~kg}\\) moves translationally with acceleration \\(a=2 \\mathrm{~m} / \\mathrm{s}^{2}\\) due to two anti parallel forces \\(F_{1}\\) and \\(F_{2}\\). The distance between the points at which these forces are applied is equal to \\(l=20 \\mathrm{~cm}\\). Besides, it is known that \\(F_{2}=5 \\mathrm{~N}\\). Find the length of the rod.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-01.jpg?height=336&width=330&top_left_y=207&top_left_x=440",
        answer: " \n Ans. \\(1 \\mathrm{~m}\\)",
    },
    {
        question:
            "For the uniform \\(5 \\mathrm{~kg}\\) beam shown in figure, how large is the tension in the supporting cable and what are the components of the force exerted by the hinge on the beam?",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-01.jpg?height=358&width=392&top_left_y=789&top_left_x=406",
        answer:
            " \n Ans. \\(\\mathrm{T}=292 \\mathrm{~N}, \\mathrm{R}_{\\mathrm{x}}=234 \\mathrm{~N}, \\mathrm{R}_{\\mathrm{y}}=25.2 \\mathrm{~N}\\) ",
    },
    {
        question:
            "5. A uniform rod is made to lean between a rough vertical wall and the ground. Show that the least angle at which the rod can be leaned with slipping is given by$$\\alpha=\\tan ^{-1}\\left(\\frac{1-\\mu_{1} \\mu_{2}}{2 \\mu_{2}}\\right)$$where \\(\\mu_{1}\\) and \\(\\mu_{2}\\) stand for the coefficient of friction between (a) the rod and the wall, and (ii) the rod and the ground.",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "6. A thin uniform rod of mass \\(m\\) and length \\(l\\) rotates with the constant angular velocity \\(\\omega\\) about the vertical axis passing through the rod's suspension point \\(O\\). In doing so, the rod describes a conical surface with a half aperture angle \\(\\theta\\). Find the angle \\(\\theta\\) as well as the magnitude and direction of the reaction force \\(N\\) at the point \\(O\\).",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-02.jpg?height=389&width=286&top_left_y=297&top_left_x=821",
        answer: " \n Ans",
    },
    {
        question:
            "7. A thin uniform rod \\(A B\\) of mass \\(m\\) and length \\(l\\) is rigidly attached at its midpoint to a rigid rotation axis \\(O O^{\\text {' as }}\\) shown in figure. The axis is set into rotation with constant angular velocity \\(\\omega\\). Find the resultant moment of the centrifugal force about the point \\(C\\) where the rod is attached to the axis. The inclination of the \\(\\operatorname{rod} A B\\) to the axis of rotation \\(O O^{\\prime}\\) is \\(\\theta\\)$$\\text { Ans. }\\left[\\frac{1}{24} m \\omega^{2} l^{2} \\sin 2 \\theta\\right]$$",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-02.jpg?height=374&width=208&top_left_y=718&top_left_x=860",
        answer: " \n ans ",
    },
    {
        question:
            "8. A uniform cube of side ' \\(a\\) ' and mass \\(m\\) rests on a rough horizontal table. A horizontal force \\(F\\) is applied normal to one of the faces at a point directly above the centre of the face, at a height \\(\\frac{3 a}{4}\\) above the base. What is the minimum value of \\(F\\) for which the cube begins to tip about an edge?",
        qnimg: "img",
        answer: " \n Ans. \\(\\frac{2}{3} m g\\).",
    },
    {
        question:
            "9. A uniform cylinder of height \\(h\\) and radius \\(r\\) is placed with its circular face on a rough inclined plane and the inclination of the plane to the horizontal is gradually increased. If \\(\\mu\\) is the coefficient of friction, then under what conditions the cylinder will (a) slide before toppling (b) topple before sliding.",
        qnimg: "img",
        answer:
            " \n Ans. (a) \\(\\mu<\\frac{2 r}{h}\\), (b) \\(\\mu>\\frac{2 r}{h}\\)",
    },
    {
        question:
            " The following data are given. \\(b=0.6 \\mathrm{~m}, h=0.9 \\mathrm{~m}, \\mu=0.5\\) and \\(g=9.8 \\mathrm{~m} / \\mathrm{s}^{2}\\) ",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-03.jpg?height=250&width=344&top_left_y=576&top_left_x=803",
        answer:
            " \n Ans. (a) \\(4.9 \\mathrm{~m} / \\mathrm{s}^{2}\\), (b) \\(6.53 \\mathrm{~m} / \\mathrm{s}^{2}\\), (c) \\(40.82 \\mathrm{~m}\\)",
    },
    {
        question:
            "11. A hemisphere of radius \\(r\\) and mass \\(M\\) is pulled by means of a string (figure) so that it moves with a uniform velocity. If \\(\\mu\\) is the coefficient of friction with the surface, find the angle of inclination of the hemisphere.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-03.jpg?height=145&width=193&top_left_y=1215&top_left_x=491",
        answer: " \n Ans. \\(\\sin \\theta=\\frac{8 \\mu}{3+8 \\mu}\\) ",
    },
    {
        question:
            "12. A solid hemisphere rests on a truck as shown in figure. If the coefficient of friction \\(\\mu\\) is just sufficient to prevent slipping, calculate the acceleration of the truck.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-04.jpg?height=207&width=321&top_left_y=94&top_left_x=803",
        answer: " \n Ans. \\(\\frac{3 g \\sin \\theta}{(8-3 \\cos \\theta)}\\)",
    },
    {
        question:
            "17. A small ball is suspended from a point \\(O\\) by a light thread of length \\(l\\). Then the ball is drawn aside so that the thread deviates through an angle \\(\\theta\\) from the vertical and set in motion in a horizontal direction at right angles to the vertical plane in which the thread is located. What is the initial velocity that has to be imparted to the ball so that it could deviate through the maximum angle of \\(\\frac{\\pi}{2}\\) with the vertical in the process of motion?",
        qnimg: "img",
        answer: " \n Ans. \\(\\sqrt{2 g l \\sec \\theta}\\)",
    },
    {
        question:
            "18. A particle is projected horizontally along the interior of a smooth hemispherical bowl of radius \\(r\\) which is kept at rest. Find the minimum initial speed \\(v_{0}\\) required for the particle to just reach the top of the bowl. The initial angular position of the particle is \\(\\theta_{0}\\).",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-04.jpg?height=217&width=344&top_left_y=764&top_left_x=803",
        answer: " \n Ans. \\(\\sqrt{2 g r \\sec \\theta_{0}}\\) ",
    },
    {
        question:
            "48. A thin plank of mass \\(M\\) and length \\(l\\) is pivoted at one end. The plank is released at \\(60^{\\circ}\\) from the vertical. What is the magnitude and direction of the force on the pivot when the plank is horizontal?",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-05.jpg?height=277&width=246&top_left_y=122&top_left_x=830",
        answer:
            " \n $$\\text { Ans. }\\left(\\sqrt{\\frac{5}{2}}\\right) m g, \\alpha=\\tan ^{-1}\\left(\\frac{1}{6}\\right) \\quad y$$",
    },
    {
        question:
            "49. One fourth length of a uniform rod of mass \\(m\\) and length \\(l\\) is placed on a rough horizontal surface and it is held stationary in horizontal position by means of a light thread as shown in the figure. The thread is then burnt and the rod starts rotating about the edge. Find the angle between the rod and the horizontal when it is about to slide on the edge. The coefficient of friction between the rod and the surface is \\(\\mu\\).",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-05.jpg?height=375&width=386&top_left_y=466&top_left_x=752",
        answer: " \n Ans",
    },
    {
        question:
            "50. A uniform \\(\\operatorname{rod} A B\\) of length 2 land mass \\(2 m\\) has a particle of mass \\(m\\) attached at \\(B\\). The rod is free to rotate in a vertical plane about a horizontal axis through \\(A\\). When the rod is hanging at rest, with \\(B\\) below \\(A\\), it is given an angular velocity \\(\\frac{7}{2} \\sqrt{\\frac{g}{l}}\\). Find the reaction at the axis when the rod first becomes horizontal.",
        qnimg: "img ",
        answer: " \n Ans. \\(m g \\sqrt{1954}\\)",
    },
    {
        question:
            "51. \\(A B C\\) is a triangular framework of three uniform rods each of mass \\(m\\) and length \\(2 l\\). It is free to rotate in its own plane about a smooth horizontal axis through \\(A\\) which is perpendicular to \\(A B C\\). If it is released from rest when \\(A B\\) is horizontal and \\(C\\) is above \\(A B\\), find the maximum velocity of \\(C\\) in the subsequent motion.",
        qnimg: "img ",
        answer: " \n Ans. \\(2 \\sqrt{g l \\sqrt{3}}\\)",
    },
    {
        question:
            "52. Show that if a rod held at angle \\(\\theta\\) to the horizontal and released, its lower end will not slip if the friction coefficient between rod and ground is greater than$$\\frac{3 \\sin \\theta \\cos \\theta}{1+3 \\sin ^{2} \\theta}$$",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "53. A uniform rod of length \\(2 a\\) is held with one end resting on a smooth horizontal table making an angle \\(\\alpha\\) with the vertical. Show that when the rod is released, its angular velocity when it makes an angle \\(\\theta\\) with the vertical is give by$$\\omega=\\left[\\frac{6 g(\\cos \\alpha-\\cos \\theta)}{\\left(1+3 \\sin ^{2} \\alpha\\right)}\\right]$$",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "54. A thin horizontal uniform \\(\\operatorname{rod} A B\\) of mass \\(m\\) and length \\(l\\) can rotate freely about a vertical axis passing through its end \\(A\\). At a certain moment the end \\(\\mathrm{B}\\) starts experiencing a constant force \\(F\\) which is always perpendicular to the original position of the stationary rod and directed in the horizontal plane. Find the angular velocity of the rod as a function of its rotation angle \\(\\varphi\\) counted relative to the initial position.$$\\text { Ans. } \\omega=\\sqrt{\\frac{6 F \\sin \\varphi}{m l}}$$",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "69. Two cylinders having radii \\(R_{1}\\) and \\(R_{2}\\) and rotational inertia \\(I_{1}\\) and \\(I_{2}\\) respectively, are supported by fixed axes perpendicular to the plane of figure. The large cylinder is initially rotating with angular velocity \\(\\omega_{0}\\). The small cylinder is moved to the right until it touches the large cylinder and its caused to rotate by the frictional force between the two. Eventually, slipping ceases, and the two cylinders rotate at constant rates in opposite directions. Find the final angular velocity \\(\\omega_{2}\\) of the small cylinder. Is the angular momentum conserved in this case?",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-07.jpg?height=208&width=482&top_left_y=434&top_left_x=312",
        answer:
            " \n Ans. \\(\\frac{\\omega_{0} I_{1} R_{1} R_{2}}{R_{2}^{2} I_{1}+R_{1}^{2} I_{2}}\\)",
    },
    {
        question:
            "70. A thin uniform square plate with side \\(l\\) and mass \\(M\\) can rotate freely about a stationary vertical axis coinciding with one of its sides. A small ball of mass \\(\\mathrm{m}\\) flying with velocity \\(v\\) at right angles to the plate strikes elastically the centre of it. Find the velocity of the ball \\(v^{\\prime}\\) after the impact and the horizontal component of the force which the axis will exert on the plate after the impact.$$\\text { Ans. } \\frac{3 m-4 M}{3 m+4 M} v$$",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "71. A uniform disc of radius \\(r_{0}\\) lies on a smooth horizontal plane. A similar disc spinning with the angular velocity \\(\\omega_{0}\\) is carefully lowered onto the first disc. How soon do both discs spin with the same angular-velocity if the friction coefficient between them is equal to \\(\\mu\\).",
        qnimg: "img ",
        answer: " \n Ans. \\(\\frac{3 r_{0} \\omega_{0}}{8 \\mu g}\\) ",
    },
    {
        question:
            "74. The hoop is cast on the rough surface such that it has an angular velocity \\(\\omega=4 \\mathrm{rad} / \\mathrm{s}\\) and an angular deceleration \\(\\alpha=5 \\mathrm{rad} / \\mathrm{s}^{2}\\). Also, its centre has a velocity of \\(v_{0}=5 \\mathrm{~m} / \\mathrm{s}\\) and a deceleration \\(a_{0}=2 \\mathrm{~m} / \\mathrm{s}^{2}\\). Determine the magnitude of acceleration of point \\(B\\) at this instant.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-08.jpg?height=301&width=442&top_left_y=224&top_left_x=396",
        answer: " \n Ans. \\(6.21 \\mathrm{~m} / \\mathrm{s}^{2}\\)",
    },
    {
        question:
            "75. At a given instant, the cables supporting the pipe have the motions shown. Determine the angular velocity and angular acceleration of the pipe and the velocity and acceleration of point \\(B\\) located on the pipe.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-08.jpg?height=372&width=449&top_left_y=724&top_left_x=321",
        answer:
            " \n Ans. \\(0.25 \\mathrm{rad} / \\mathrm{s}, 1.5 \\mathrm{~m} / \\mathrm{s}, 0.875 \\mathrm{rad} / \\mathrm{s}^{2}, 0.452 \\mathrm{~m} / \\mathrm{s}^{2}\\)",
    },
    {
        question:
            "76. Due to slipping, points \\(A\\) and \\(B\\) on the rim of the disk have the velocities shown. Determine the velocities of the centre point \\(C\\) and point \\(F\\) at this instant.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-08.jpg?height=236&width=415&top_left_y=1257&top_left_x=335",
        answer:
            " \n Ans. \\(0.75 \\mathrm{~m} / \\mathrm{s}, 1.98 \\mathrm{~m} / \\mathrm{s}\\) 78.",
    },
    {
        question:
            "80. A force \\(F\\) is applied tangential at the topmost point of a sphere of mass \\(M\\) and radius \\(R\\). If the ground is rough enough to prevent sliding, find the linear acceleration of the sphere.",
        qnimg: "img",
        answer: " \n Ans. \\(\\frac{10 F}{7 M}\\)",
    },
    {
        question:
            "81. A cylinder of mass \\(M\\) and radius \\(R\\) rolls without slipping down an inclined plane of length \\(l\\). Find the linear acceleration of the cylinder. Also find the minimum friction coefficient required on the inclined plane for which the cylinder does not slip.",
        qnimg: "img",
        answer:
            " \n Ans. \\(\\frac{2}{3} g \\sin \\theta, \\mu \\geq \\frac{1}{3} \\tan \\theta\\)",
    },
    {
        question:
            "91. A rectangular rigid fixed block has a long horizontal edge. A solid homogeneous cylinder of radius \\(R\\) is placed horizontally at test with its length parallel to the edge such that the axis of the cylinder and the edge of the block are in the same vertical plane as shown in figure. There is sufficient friction present at the edge so that a very small displacement causes the cylinder to roll of the edge without slipping. Determine(a) the angle \\(\\theta\\) through which the cylinder rotates before it leaves contact with the edge.(b) the speed of the centre of mass of the cylinder before leaving contact with the edge, and(c) the ratio of the translational to rotational kinetic energies of the cylinder when its centre of mass is in horizontal line with the edge.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-10.jpg?height=307&width=405&top_left_y=37&top_left_x=716",
        answer:
            " \n $\\text { Ans. } \\cos ^{-1}\\left(\\frac{4}{7}\\right), \\sqrt{\\frac{4 g R}{7}}, 6$",
    },
    {
        question:
            "92. A uniform solid cylinder of radius \\(R\\) roll's over a horizontal plane passing into an inclined plane forming an angle \\(\\alpha\\) with the horizontal as shown in figure. Find the maximum value of the velocity \\(v\\) which still permits the cylinder to roll onto the inclined",
        qnimg: "plane section without a jump. The sliding is assumed to be absent.",
        answer: " \n Ans. \\(\\sqrt{\\frac{1}{3} g R(7 \\cos \\alpha-4)}\\)",
    },
    {
        question:
            "94. A rough wedge of mass \\(M\\) is free to move on a smooth horizontal plane as shown in figure. The uniform cylinder of mass \\(m\\) is placed on the wedge and it begins to roll down without slipping. Show that the acceleration of cylinder on the surface of wedge is given as$$a=\\frac{2 g \\sin \\theta(m+M)}{m+3 M+2 m \\sin ^{2} \\theta}$$",
        qnimg: "img",
        answer: " \n Ans",
    },
    {
        question:
            "110. A uniform rod \\(A B\\) of mass \\(m\\) and length \\(2 l\\) is suspended by two strings \\(O A, O B\\) of equal length attached to a fixed point \\(O\\). The rod is at rest in a horizontal position and each string makes an angle \\(\\alpha\\) with the horizontal. If the string \\(O B\\) is cut, in what ratio the tension in \\(O A\\) will be instantaneously reduced?",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-11.jpg?height=256&width=319&top_left_y=184&top_left_x=406",
        answer:
            " \n Ans. \\(\\frac{2 \\sin ^{2} \\alpha}{1+3 \\sin ^{2} \\alpha}\\)",
    },
    {
        question:
            "113. On a rough inclined plane of inclination \\(45^{\\circ}\\) a block of mass \\(m\\) and a cylinder of mass \\(2 m\\) are released. Coefficient of friction between all the surfaces of contact is \\(0.5\\). Find the acceleration of the block and the cylinder when (a) they move separately (b) they move together.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-11.jpg?height=303&width=383&top_left_y=917&top_left_x=284",
        answer:
            " \n $$\\text { Ans. } a_{\\text {block }}=\\frac{g}{2 \\sqrt{2}}, a_{\\text {cylinder }}=\\frac{\\sqrt{2} g}{3}$$",
    },
    {
        question:
            "114. A sphere of mass \\(m\\) is placed on a rough plank of mass \\(2 m\\) which in turn is placed on a rough inclined plane. Coefficient of friction between the plane and sphere is \\(\\mu_{2}\\) and that between plank and plank is \\(\\mu_{1}\\). Determine the maximum value of \\(\\frac{\\mu_{1}}{\\mu_{2}}\\) to ensure pure rolling at plank and sphere surface.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-12.jpg?height=190&width=317&top_left_y=250&top_left_x=454",
        answer: " \n Ans. \\(\\frac{8}{3}\\)",
    },
    {
        question:
            "115. A solid cylinder of mass \\(m\\) is rolling on a rough horizontal surface with velocity \\(v_{0}\\). It collides elastically with a cubical block of same mass at rest. the height of centre of mass of both the bodies is same. Assume that there is no friction between the cylinder and the block. Coefficient of friction at all other surfaces is \\(\\mu\\). Find:(a) the velocity of block when cylinder starts pure rolling again(b) at what time from first collision, the second collision will take place.",
        qnimg:
            "https://cdn.mathpix.com/cropped/2022_05_21_7de23b6a30c8bb083f43g-12.jpg?height=108&width=275&top_left_y=775&top_left_x=449",
        answer:
            " \n Ans. (a) \\(\\frac{v_{0}}{3}\\), (b) \\(\\frac{\\sqrt{5} v_{0}}{3 \\mu g}\\)",
    },
];
export default qnadata;

{/* replace with ",
 answer: */}
