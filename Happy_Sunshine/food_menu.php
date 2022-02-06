<div id="food_menu">
    <?php
    function generate_menu_items($food_name, $icon_link){
        echo '    <a class="food_item">';
        echo '        <img src="' . $icon_link . '" alt="">';
        echo '        <p>' . $food_name . '</p>';
        echo '    </a>';
    }

    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");
    generate_menu_items("Breakfast Sandwiches","./img/icons/breakfast-sandwich.svg");

    ?>
</div>