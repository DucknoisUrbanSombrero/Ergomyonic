import cv2
import sys

faceCascade = cv2.CascadeClassifier("face.xml")

video_capture = cv2.VideoCapture(0)

while(True):
	def avgValues(t):
		index = 0
		avgW = 0
		avgH = 0
		avgX = 0
		avgY = 0
		data = []
		while index < t:
		    # Capture frame-by-frame
		    ret, frame = video_capture.read()

		    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

		    faces = faceCascade.detectMultiScale(
		        gray,
		        scaleFactor=1.1,
		        minNeighbors=5,
		        minSize=(30, 30),
		    )

		    avgX = 0
		    count = 0
		    # Draw a rectangle around the faces
		    if len(faces) > 0:
			    for (x, y, w, h) in faces:
			    	"""avgX+=x
			    	count+=1
			    	if abs(avgX / count - x ) < 20: """
			    	cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
		            avgW += w
		            avgH += h
		            avgY += y

		   	# Display the resulting frame
		    cv2.imshow('Video', frame)

		    index+=1

		    if cv2.waitKey(1) & 0xFF == ord('q'):
		        break
		data = [ avgY/index, (avgW/index * avgH/index)]
		return data
	point = avgValues(10)
	print point


# When everything is done, release the capture
video_capture.release()
cv2.destroyAllWindows()
