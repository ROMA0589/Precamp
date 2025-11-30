using Oxide.Core.Plugins;
using Oxide.Game.Rust.Cui;
using Oxide.Core;
using UnityEngine;
using System.Collections.Generic;

namespace Oxide.Plugins
{
    [Info("BackpackButton", "TuNombre", "1.0.0")]
    [Description("Agrega un botón para abrir la mochila usando Backpacks v2.x")] 
    public class BackpackButton : RustPlugin
    {
        [PluginReference]
        private Plugin Backpacks;

        private const string ButtonPanel = "BackpackButtonUI";
        private const string ButtonCommand = "backpack.open";

        private class PluginConfig
        {
            public string ButtonPosition { get; set; } = "Right";
            public float OffsetX { get; set; } = 0.70f;
            public float AnchorMinY { get; set; } = 0.02f;
            public float AnchorMaxX { get; set; } = 0.74f;
            public float AnchorMaxY { get; set; } = 0.06f;
            public string Color { get; set; } = "0.4 0.8 1 0.8";
            public float ImageSize { get; set; } = 0.04f;
        }

        private PluginConfig _config;

        protected override void LoadDefaultConfig()
        {
            _config = new PluginConfig();
            Config.WriteObject(_config, true);
        }

        void Init()
        {
            _config = Config.ReadObject<PluginConfig>() ?? new PluginConfig();
        }

        void OnPlayerConnected(BasePlayer player)
        {
            ShowButton(player);
        }

        void OnPlayerInit(BasePlayer player)
        {
            ShowButton(player);
        }

        void OnPlayerRespawned(BasePlayer player)
        {
            ShowButton(player);
        }

        void ShowButton(BasePlayer player)
        {
            CuiHelper.DestroyUi(player, ButtonPanel);
            var elements = new CuiElementContainer();
            // Botón cuadrado con sprite interno de Rust
            var button = elements.Add(new CuiButton
            {
                Button = { Color = "0 0 0 0", Command = ButtonCommand, FadeIn = 0.2f }, // Color transparente para no tapar la imagen
                RectTransform = { AnchorMin = "0.64 0.02", AnchorMax = "0.68 0.06" },
                Text = { Text = "", FontSize = 0, Align = TextAnchor.MiddleCenter }
            }, "Hud", ButtonPanel);
            elements.Add(new CuiElement
            {
                Parent = ButtonPanel,
                Name = ButtonPanel + "_Icon",
                Components =
                {
                    new CuiRawImageComponent { Sprite = "assets/icons/backpack.png" },
                    new CuiRectTransformComponent { AnchorMin = "0 0", AnchorMax = "1 1" }
                }
            });
            CuiHelper.AddUi(player, elements);
        }

        [ConsoleCommand(ButtonCommand)]
        void CmdOpenBackpack(ConsoleSystem.Arg arg)
        {
            var player = arg.Player();
            if (player == null)
            {
                PrintWarning("No se pudo obtener el jugador al hacer clic en el botón.");
                return;
            }
            player.ChatMessage("Has hecho clic en el botón de la mochila.");
            // Intentar abrir la mochila usando el método del plugin
            var result = Backpacks?.Call("OpenBackpack", player);
            if (result == null)
            {
                // Si no funciona, intentar ejecutar el comando de chat
                player.SendConsoleCommand("chat.say", "/backpack");
            }
        }

        void OnPlayerDisconnected(BasePlayer player, string reason)
        {
            CuiHelper.DestroyUi(player, ButtonPanel);
        }
    }
}
