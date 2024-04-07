swayidle -w \
	timeout 600 'swaylock -f -e --grace 180 --clock --indicator-idle-visible --indicator-radius 200 -i $HOME/.config/hypr/Images/serene.jpg' \
	
	timeout 900 'hyprctl dispatch dpms off' \
	on-resume 'sleep 3; hyprctl dispatch dpms on' \
    
    timeout 1200 'systemctl suspend -i' \
    before-sleep 'swaylock -f -e --grace 0 --clock --indicator-idle-visible --indicator-radius 200 -i $HOME/.config/hypr/Images/serene.jpg' 
