const r = require('raylib')

const screenWidth = 800
const screenHeight = 450
r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")
r.SetTargetFPS(60)
const font = r.LoadFontEx("./hack-font/Hack-Regular.ttf", 32, 0, 1224)
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
     
    r.DrawTextEx(font, "Вітаю! // \"Greetings\" in Ukrainian", {x :40, y: 20}, 40, 2, r.YELLOW)
    r.EndDrawing()
}
r.UnloadFont(font)
r.CloseWindow()