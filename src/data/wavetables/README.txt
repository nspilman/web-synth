Put wavetable files in this folder.

File format can follow one of two forms.

The 1st line always specifies the type of the data (timeseries or coefficients).

If the type is timeseries, the 2nd line is comma-separated floating-point timeseries data.

If the type is coefficients, the 2nd line is comma-separated floating point sine coefficients, 
and the 3rd line is comma-separated cosine coefficients.

timeseries
0,0.1,0.5,0.3

coefficients
0,1
0,0