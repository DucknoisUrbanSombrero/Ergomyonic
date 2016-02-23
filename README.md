# Ergomyonic
This was made for MHacks: http://devpost.com/software/ergomyonic 
Written by Noam Lerner and Frank Maloney
=================================================================
Helps you stay ergonomically correct while coding for long periods of time. It does this in three ways:
This program has a CLI and can be starting by running "node index.js" in the root directory.
1 - Myo
    To use the myo, you need to calibrate it in our program and follow the instructions. It will ask you to show it what ergonomically correct and incorrect looks like for you while typing, and using a Neural Network, it wil be able to identify when you are in a good or bad ergonomic position. 
    The myo will vibrate when you move to a bad position to warn you.
  -Posture
    Using your webcam and facial recognition, the program will ask you again to show it good and bad posture and will use machine learning to warn you through a desktop notification when your posture is off.
  -Sight
    Every 30 minutes (or whatever time you set this to using the calibration) a desktop notification will warn you that you should take a break from looking at the screen.
