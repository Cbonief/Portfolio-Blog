class WaterTank{
    
    var g = 9.8;


    // def __init__(self, h0=0, max_height=1, tank_area=0.09, tank_escape_area=0.0004*np.pi, incoming_max_velocity=20, input_area=0.0004*np.pi):
    //     self.h = h0
    //     self.h_max = max_height
    //     self.k1 = np.sqrt(2*self.g)*tank_escape_area/tank_area
    //     self.k2 = incoming_max_velocity*input_area/tank_area
    //     self.elapsed_time = 0
    //     self.h0 = h0
    //     self.elapsed_time_text = ''
    //     self.last_h = h0

    // def iterate(self, action, dt=0.01):
    //     dh = self.k2*action - self.k1*np.sqrt(self.h)
    //     self.h += dh*dt
    //     self.elapsed_time += dt
    //     if self.h <= 0:
    //         self.h = 0
    //     if self.h >= self.h_max:
    //         self.h = self.h_max

    // def elapsed_time_string(self):
    //     self.elapsed_time_text = ''
    //     time = self.elapsed_time
    //     x = int(np.floor(time % 100))
    //     if x < 10:
    //         self.elapsed_time_text += '0'
    //     self.elapsed_time_text += str(x) + ':'
    //     y = int(np.floor(100 * (self.elapsed_time - x)))
    //     self.elapsed_time_text += str(y)
    //     if y < 10:
    //         self.elapsed_time_text += '0'


    // def restart(self):
    //     self.elapsed_time = 0
    //     self.h = self.h0

    // def get_reading(self):
    //     return self.h + np.random.normal(0, 0.01)

    // def get_elapsed_time(self):
    //     return self.elapsed_time

}
