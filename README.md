# redis_assessment
This project illustrates ReplicaOf.  A RS instance replicates a Redis OSS source.  There are two files:  
- redis_write.js: Writes a key/value pair of format [(1, "This is value #1")..(100, "This is value #100")] from 1 - 100.  It writes to the OSS instance
- redis_read.js: Reads a key/value pair between 1 and 100 from the RS instance

# Sample write output:
Wrote 78
Wrote 79
Wrote 80
Wrote 81
Wrote 82
Wrote 83
Wrote 84
Wrote 85
Wrote 86
Wrote 87
Wrote 88
Wrote 89
Wrote 90
Wrote 91
Wrote 92
Wrote 93
Wrote 94

# Sample read output:
This is value #100
This is value #99
This is value #98
This is value #97
This is value #96
This is value #95
This is value #94
This is value #93
This is value #92
This is value #91
This is value #90
This is value #89
This is value #88
This is value #87
This is value #86