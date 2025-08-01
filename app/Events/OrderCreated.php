<?php

namespace App\Events;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OrderCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    
    use InteractsWithSockets;

    public $order;

    public function __construct($order)
    {
        $this->order = $order;
      
    }

    public function broadcastOn()
    {
     
        return new Channel('order-channel');

    }

    public function broadcastAs()
    {
        return 'order.created';
    }
    
        
}

